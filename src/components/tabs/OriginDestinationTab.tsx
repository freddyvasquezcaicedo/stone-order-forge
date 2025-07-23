import { Card } from "@/components/ui/card";
import { FormData } from "../ProductionOrderForm";
import FormField from "../FormField";

interface OriginDestinationTabProps {
  formData: FormData;
  updateFormData: (section: string, data: any) => void;
}

export default function OriginDestinationTab({ formData }: OriginDestinationTabProps) {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-primary mb-6">2. Origen y Destino</h2>
        
        <h3 className="text-lg font-medium mb-4">Origen</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="md:col-span-2">
            <FormField label="Dirección Origen" value={formData.origen.direccion} />
          </div>
          <FormField label="Latitud" value={formData.origen.latitud} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <FormField label="Ciudad" value={formData.origen.ciudad} />
          <FormField label="Departamento" value={formData.origen.departamento} />
          <FormField label="Longitud" value={formData.origen.longitud} />
        </div>
        
        <div className="mb-6">
          <FormField label="Punto de Referencia" value={formData.origen.puntoReferencia} />
        </div>
        
        <h3 className="text-lg font-medium mb-4">Destino</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="md:col-span-2">
            <FormField label="Dirección Destino" value={formData.destino.direccion} />
          </div>
          <FormField label="Latitud" value={formData.destino.latitud} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <FormField label="Ciudad" value={formData.destino.ciudad} />
          <FormField label="Departamento" value={formData.destino.departamento} />
          <FormField label="Longitud" value={formData.destino.longitud} />
        </div>
        
        <div>
          <FormField label="Punto de Referencia" value={formData.destino.puntoReferencia} />
        </div>
      </Card>
      
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-primary mb-6">3. Información de Ruta</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <FormField label="Ruta" value={formData.ruta.codigo} />
          <FormField label="Distancia (Km)" value={formData.ruta.distancia} />
        </div>
        <FormField label="Puntos de Control" value={formData.ruta.puntosControl} />
      </Card>
    </div>
  );
}