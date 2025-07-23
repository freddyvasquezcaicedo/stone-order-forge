import { Card } from "@/components/ui/card";
import { FormData } from "../ProductionOrderForm";
import FormField from "../FormField";

interface VehicleTabProps {
  formData: FormData;
  updateFormData: (section: string, data: any) => void;
}

export default function VehicleTab({ formData }: VehicleTabProps) {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold text-primary mb-6">5. Información de Vehículo y Carrocería</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <FormField label="Tipo de Vehículo" value={formData.vehiculo.tipo} />
        <FormField label="Combinación de Vehículo" value={formData.vehiculo.combinacion} />
        <FormField label="Configuración" value={formData.vehiculo.configuracion} />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <FormField label="Tipo de Carrocería" value={formData.vehiculo.tipoCarroceria} />
        <FormField label="Placa (si conocida)" value={formData.vehiculo.placa || "-"} />
        <FormField label="Modelo Requerido" value={formData.vehiculo.modeloRequerido} />
        <div className="space-y-0">
          <div className="bg-muted text-muted-foreground p-2 rounded-t text-sm">
            o superior
          </div>
          <div className="border border-border rounded-b p-2 bg-white min-h-[40px] flex items-center">
            <div className="w-5 h-5 border rounded border-border bg-white flex items-center justify-center text-primary font-bold">
              {formData.vehiculo.oSuperior && '✓'}
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <FormField label="Peso Trailer (Kg)" value={formData.vehiculo.pesoTrailer} />
        <FormField label="Peso Cabezote (Kg)" value={formData.vehiculo.pesoCabezote} />
      </div>
      
      <div>
        <FormField label="Observaciones de Vehículo" value={formData.vehiculo.observaciones} isTextarea />
      </div>
    </Card>
  );
}