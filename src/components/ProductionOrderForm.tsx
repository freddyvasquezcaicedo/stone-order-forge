import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductionOrderHeader from "./ProductionOrderHeader";
import TabNavigation from "./TabNavigation";
import GeneralInfoTab from "./tabs/GeneralInfoTab";
import OriginDestinationTab from "./tabs/OriginDestinationTab";
import CargoTab from "./tabs/CargoTab";
import VehicleTab from "./tabs/VehicleTab";
import DatesTab from "./tabs/DatesTab";
import RatesTab from "./tabs/RatesTab";
import DocumentsTab from "./tabs/DocumentsTab";
import ObservationsTab from "./tabs/ObservationsTab";

export interface FormData {
  // General Info
  cliente: string;
  estado: string;
  fechaCreacion: string;
  cupoDisponible: string;
  tipoMoneda: string;
  trm: string;
  ejecutivoComercial: string;
  soporteComercial: string;
  tipoServicio: string;
  lineaNegocio: string;
  tipoViaje: string;
  cantidadVehiculos: number;
  
  // Origin/Destination
  origen: {
    direccion: string;
    latitud: string;
    longitud: string;
    ciudad: string;
    departamento: string;
    puntoReferencia: string;
  };
  destino: {
    direccion: string;
    latitud: string;
    longitud: string;
    ciudad: string;
    departamento: string;
    puntoReferencia: string;
  };
  ruta: {
    codigo: string;
    distancia: string;
    puntosControl: string;
  };
  
  // Cargo
  carga: {
    tipo: string;
    naturaleza: string;
    tipoEmpaque: string;
    descripcion: string;
    especificaciones: string;
    peso: string;
    volumen: string;
    mercancialPeligrosa: boolean;
    valorDeclarado: string;
    moneda: string;
    tipoPoliza: string;
    customizacion: string;
  };
  
  // Vehicle
  vehiculo: {
    tipo: string;
    combinacion: string;
    configuracion: string;
    tipoCarroceria: string;
    placa: string;
    modeloRequerido: string;
    oSuperior: boolean;
    pesoTrailer: string;
    pesoCabezote: string;
    observaciones: string;
  };
  
  // Dates
  fechas: {
    fechaCargue: string;
    fechaDescargue: string;
    fechaLimiteEntrega: string;
    devolucionContenedor: boolean;
    instruccionesDevolucion: string;
  };
  
  // Rates
  tarifas: {
    idTarifa: string;
    descripcionTarifa: string;
    valorSicetac: string;
    fleteTecho: string;
    valorTarifa: string;
    valorFlete: string;
    rentabilidad: string;
    aprobacionExcepcional: boolean;
  };
  
  // Documents
  documentos: Record<string, boolean>;
  
  // Observations
  observaciones: string;
}

const INITIAL_FORM_DATA: FormData = {
  cliente: "TRANSPORTES XYZ S.A.",
  estado: "BORRADOR",
  fechaCreacion: "15/04/2025",
  cupoDisponible: "$50,000,000",
  tipoMoneda: "Pesos",
  trm: "N/A",
  ejecutivoComercial: "JUAN PÉREZ",
  soporteComercial: "MARÍA RODRÍGUEZ",
  tipoServicio: "Transporte",
  lineaNegocio: "cargaGeneral",
  tipoViaje: "nacional",
  cantidadVehiculos: 3,
  
  origen: {
    direccion: "Calle 80 # 15-45, Bodega 12",
    latitud: "4.6486",
    longitud: "-74.1038",
    ciudad: "Bogotá",
    departamento: "Cundinamarca",
    puntoReferencia: "Frente a estación de gasolina Terpel"
  },
  
  destino: {
    direccion: "Carrera 50 # 27-30, Zona Industrial",
    latitud: "6.2442",
    longitud: "-75.5812",
    ciudad: "Medellín",
    departamento: "Antioquia",
    puntoReferencia: "Junto al centro comercial Plaza Mayor"
  },
  
  ruta: {
    codigo: "BOG-MED-01",
    distancia: "421",
    puntosControl: "Alto de La Línea, Peaje La Dorada, Peaje Guarne"
  },
  
  carga: {
    tipo: "Carga Seca",
    naturaleza: "Productos Manufacturados",
    tipoEmpaque: "Cajas",
    descripcion: "Electrodomésticos - Línea Blanca",
    especificaciones: "Frágil, requiere manipulación cuidadosa",
    peso: "8,500",
    volumen: "45",
    mercancialPeligrosa: false,
    valorDeclarado: "$120,000,000",
    moneda: "Pesos",
    tipoPoliza: "Póliza Todo Riesgo - Mercancías",
    customizacion: "Estiba especial con separadores"
  },
  
  vehiculo: {
    tipo: "Tractomula",
    combinacion: "3S2",
    configuracion: "C3-S2",
    tipoCarroceria: "Furgón",
    placa: "",
    modeloRequerido: "2020",
    oSuperior: true,
    pesoTrailer: "8,000",
    pesoCabezote: "9,500",
    observaciones: "Se requiere vehículo con puertas laterales para cargue. Conductor debe tener curso de manejo defensivo y experiencia mínima de 3 años con mercancía similar."
  },
  
  fechas: {
    fechaCargue: "20/04/2025 08:00",
    fechaDescargue: "21/04/2025 14:00",
    fechaLimiteEntrega: "21/04/2025 18:00",
    devolucionContenedor: false,
    instruccionesDevolucion: "No Aplica"
  },
  
  tarifas: {
    idTarifa: "TAR-CG-145",
    descripcionTarifa: "BOG-MED-STANDARD-TM",
    valorSicetac: "$3,200,000",
    fleteTecho: "$3,600,000",
    valorTarifa: "$3,800,000",
    valorFlete: "$3,400,000",
    rentabilidad: "10.53%",
    aprobacionExcepcional: false
  },
  
  documentos: {},
  observaciones: ""
};

const TABS = [
  { id: 'general', label: 'Info. General', step: 1 },
  { id: 'origen', label: 'Origen/Destino', step: 2 },
  { id: 'carga', label: 'Carga', step: 3 },
  { id: 'vehiculo', label: 'Vehículo', step: 4 },
  { id: 'fechas', label: 'Fechas', step: 5 },
  { id: 'tarifas', label: 'Tarifas', step: 6 },
  { id: 'documentos', label: 'Documentos', step: 7 },
  { id: 'observaciones', label: 'Observaciones', step: 8 }
];

export default function ProductionOrderForm() {
  const [activeTab, setActiveTab] = useState('general');
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);

  const currentTabIndex = TABS.findIndex(tab => tab.id === activeTab);
  const progressPercentage = ((currentTabIndex + 1) / TABS.length) * 100;

  const navigateTab = (direction: 'prev' | 'next') => {
    const currentIndex = TABS.findIndex(tab => tab.id === activeTab);
    if (direction === 'prev' && currentIndex > 0) {
      setActiveTab(TABS[currentIndex - 1].id);
    } else if (direction === 'next' && currentIndex < TABS.length - 1) {
      setActiveTab(TABS[currentIndex + 1].id);
    }
  };

  const updateFormData = (section: string, data: any) => {
    setFormData(prev => {
      if (section in prev) {
        return {
          ...prev,
          [section]: typeof prev[section as keyof FormData] === 'object' 
            ? { ...(prev[section as keyof FormData] as any), ...data }
            : data
        };
      }
      return { ...prev, [section]: data };
    });
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'general':
        return <GeneralInfoTab formData={formData} updateFormData={updateFormData} />;
      case 'origen':
        return <OriginDestinationTab formData={formData} updateFormData={updateFormData} />;
      case 'carga':
        return <CargoTab formData={formData} updateFormData={updateFormData} />;
      case 'vehiculo':
        return <VehicleTab formData={formData} updateFormData={updateFormData} />;
      case 'fechas':
        return <DatesTab formData={formData} updateFormData={updateFormData} />;
      case 'tarifas':
        return <RatesTab formData={formData} updateFormData={updateFormData} />;
      case 'documentos':
        return <DocumentsTab formData={formData} updateFormData={updateFormData} />;
      case 'observaciones':
        return <ObservationsTab formData={formData} updateFormData={updateFormData} />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4 bg-background">
      <ProductionOrderHeader orderNumber="OP-000123" />
      
      <div className="relative mb-6">
        <TabNavigation 
          tabs={TABS}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          progress={progressPercentage}
        />
        
        {/* Navigation Arrows */}
        <div className="flex justify-between mt-4">
          <Button
            variant="outline"
            onClick={() => navigateTab('prev')}
            disabled={currentTabIndex === 0}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Anterior
          </Button>
          
          <Button
            variant="outline"
            onClick={() => navigateTab('next')}
            disabled={currentTabIndex === TABS.length - 1}
            className="flex items-center gap-2"
          >
            Siguiente
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="min-h-[600px]">
        {renderTabContent()}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4 mt-8">
        <Button variant="outline" className="min-w-[150px]">
          Guardar Borrador
        </Button>
        <Button variant="default" className="min-w-[150px]">
          Crear Orden
        </Button>
        <Button variant="secondary" className="min-w-[150px]">
          Cancelar
        </Button>
      </div>
    </div>
  );
}