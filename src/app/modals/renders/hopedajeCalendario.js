'use client';

import { useState } from 'react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { 
  BotonCerrar, 
  BotonVolver, 
  BotonSiguiente, 
  ContenedorBotones, 
  Espaciador 
} from './botones';

export default function RenderHospedaje({ datos, onSiguiente, onVolver, onClose }) {
  const [respuesta, setRespuesta] = useState(datos.necesitaHospedaje);
  const [mostrarCalendario, setMostrarCalendario] = useState(false);
  const [fechas, setFechas] = useState(datos.fechas || { inicio: null, fin: null });
  const [mesActual, setMesActual] = useState(new Date());
  const [detallesPersonas, setDetallesPersonas] = useState({
    adultos: datos.detallesPersonas?.adultos || 1,
    ninos: datos.detallesPersonas?.ninos || 0,
    bebes: datos.detallesPersonas?.bebes || 0
  });

  const generarDiasMes = (fecha) => {
    const year = fecha.getFullYear();
    const month = fecha.getMonth();
    const primerDia = new Date(year, month, 1);
    const ultimoDia = new Date(year, month + 1, 0);
    const dias = [];

    const diaSemanaInicio = primerDia.getDay();
    for (let i = 0; i < diaSemanaInicio; i++) {
      dias.push(null);
    }

    for (let i = 1; i <= ultimoDia.getDate(); i++) {
      dias.push(new Date(year, month, i));
    }

    return dias;
  };

  const cambiarMes = (direccion) => {
    setMesActual(prev => {
      const nuevoMes = new Date(prev);
      nuevoMes.setMonth(direccion === 'prev' ? prev.getMonth() - 1 : prev.getMonth() + 1);
      return nuevoMes;
    });
  };

  const seleccionarFecha = (fecha) => {
    if (!fechas.inicio || (fechas.inicio && fechas.fin)) {
      setFechas({ inicio: fecha, fin: null });
    } 
    else if (fechas.inicio && fecha.toDateString() === fechas.inicio.toDateString()) {
      setFechas({ inicio: null, fin: null });
    }
    else if (fecha < fechas.inicio) {
      setFechas({ inicio: fecha, fin: null });
    }
    else {
      setFechas(prev => ({ ...prev, fin: fecha }));
    }
  };

  const handleRespuesta = (resp) => {
    setRespuesta(resp);
    setMostrarCalendario(resp);
    if (!resp) {
      setFechas({ inicio: null, fin: null });
    }
  };

  const actualizarDetalles = (campo, valor) => {
    setDetallesPersonas(prev => ({
      ...prev,
      [campo]: Math.max(0, valor)
    }));
  };

  const handleSiguiente = () => {
    if (respuesta === null) return;
    if (respuesta && (!fechas.inicio || !fechas.fin)) return;
    
    onSiguiente({ 
      necesitaHospedaje: respuesta,
      fechas: respuesta ? fechas : null,
      detallesPersonas
    });
  };

  const dias = generarDiasMes(mesActual);
  const diasSemana = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

  return (
    <div className="relative h-full flex flex-col">
      {/* Botón de cerrar en posición absoluta en la esquina superior derecha */}
      <div className="absolute top-2 right-2 z-10">
        <BotonCerrar onClick={onClose} />
      </div>
      <div className="overflow-y-auto flex-grow pr-2" style={{ maxHeight: 'calc(100vh - 150px)' }}>
        {/* Encabezado con botón cerrar */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex flex-col">
            <h2 className="text-xl font-bold text-black mb-1">¿Te quieres hospedar?</h2>
            <p className="text-gray-700 text-sm">Recibe recomendaciones personalizadas</p>
          </div>
          
        </div>

        {/* Botones Sí/No */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => handleRespuesta(true)}
            className={`px-6 py-3 rounded-lg font-medium text-base ${
              respuesta === true ? 'bg-[#7CB936] text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            Sí
          </button>
          <button
            onClick={() => handleRespuesta(false)}
            className={`px-6 py-3 rounded-lg font-medium text-base ${
              respuesta === false ? 'bg-[#EA5261] text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            No
          </button>
        </div>

        {/* Calendario */}
        {mostrarCalendario && (
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-black mb-3">Selecciona tus fechas</h3>
            
            <div className="bg-white p-3 rounded-lg border border-gray-200 mb-2">
              <div className="flex justify-between items-center mb-3">
                <button onClick={() => cambiarMes('prev')} className="p-1 text-black">
                  &lt;
                </button>
                <span className="font-medium text-sm text-black">
                  {format(mesActual, 'MMMM yyyy', { locale: es })}
                </span>
                <button onClick={() => cambiarMes('next')} className="p-1 text-black">
                  &gt;
                </button>
              </div>

              <div className="grid grid-cols-7 gap-1 text-center">
                {diasSemana.map((dia, i) => (
                  <div key={i} className="text-xs font-medium text-gray-700 py-1">
                    {dia}
                  </div>
                ))}

                {dias.map((dia, i) => (
                  <button
                    key={i}
                    onClick={() => dia && seleccionarFecha(dia)}
                    className={`text-xs p-2 rounded-full ${
                      !dia ? 'invisible' : 
                      fechas.inicio?.toDateString() === dia.toDateString() ? 'bg-[#7CB936] text-white' : // Verde para fecha inicio
                      fechas.fin?.toDateString() === dia.toDateString() ? 'bg-[#EA5261] text-white' : // Rojo para fecha fin
                      fechas.inicio && fechas.fin && dia > fechas.inicio && dia < fechas.fin ? 'bg-[#37e045]' : // Verde claro para rango
                      'text-black hover:bg-gray-100'
                    }`}
                  >
                    {dia?.getDate()}
                  </button>
                ))}
              </div>
            </div>

            {(fechas.inicio || fechas.fin) && (
              <div className="text-center text-sm">
                {fechas.inicio && <span className="text-green-500">Llegada: {format(fechas.inicio, 'dd/MM/yyyy')}</span>}
                {fechas.fin && <span className="text-red-600 ml-2">Salida: {format(fechas.fin, 'dd/MM/yyyy')}</span>}
              </div>
            )}
          </div>
        )}

        {/* Selector de personas */}
        {respuesta === true && (
          <div className="mb-6">
            <h3 className="text-base font-semibold text-black mb-3">¿Con cuántas personas viajas?</h3>
            
            <div className="grid grid-cols-3 gap-3 mb-3">
              {['adultos', 'ninos', 'bebes'].map((tipo) => (
                <div key={tipo} className="flex flex-col border-accent rounded-lg p-3 bg-white">
                  <label className="text-xs text-black mb-1">
                    {tipo === 'adultos' ? 'Adultos' : 
                     tipo === 'ninos' ? 'Niños (2-12)' : 'Bebés (0-2)'}
                  </label>
                  <div className="flex border-2 border-green-600  rounded-lg">
                    <button 
                      onClick={() => actualizarDetalles(tipo, detallesPersonas[tipo] - 1)}
                      className="px-2 py-1 disabled:opacity-50 text-black"
                      disabled={tipo === 'adultos' ? detallesPersonas.adultos <= 1 : detallesPersonas[tipo] <= 0}
                    >
                      -
                    </button>
                    <span className="flex-1 text-center py-1 text-black">
                      {detallesPersonas[tipo]}
                    </span>
                    <button 
                      onClick={() => actualizarDetalles(tipo, detallesPersonas[tipo] + 1)}
                      className="px-2 py-1 text-black"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-2 bg-gray-100 rounded-lg">
              <p className="text-xs text-black">
                <span className="font-medium">Resumen:</span> {detallesPersonas.adultos} adulto{detallesPersonas.adultos !== 1 ? 's' : ''}
                {detallesPersonas.ninos > 0 && `, ${detallesPersonas.ninos} niño${detallesPersonas.ninos !== 1 ? 's' : ''}`}
                {detallesPersonas.bebes > 0 ? `, ${detallesPersonas.bebes} bebé${detallesPersonas.bebes !== 1 ? 's' : ''}` : ', sin bebés'}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Botones de navegación */}
      <div className="pt-4 pb-2">
        <ContenedorBotones>
          <BotonVolver onClick={onVolver} />
          <Espaciador />
          <BotonSiguiente 
            onClick={handleSiguiente} 
            disabled={respuesta === null || (respuesta && (!fechas.inicio || !fechas.fin))} 
          />
        </ContenedorBotones>
      </div>
    </div>
  );
}