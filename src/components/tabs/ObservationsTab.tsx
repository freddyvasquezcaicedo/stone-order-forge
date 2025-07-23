import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { FormData } from "../ProductionOrderForm";

interface ObservationsTabProps {
  formData: FormData;
  updateFormData: (section: string, data: any) => void;
}

export default function ObservationsTab({ formData, updateFormData }: ObservationsTabProps) {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold text-primary mb-6">8. Observaciones</h2>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Observaciones Generales</label>
          <Textarea 
            value={formData.observaciones}
            onChange={(e) => updateFormData('observaciones', e.target.value)}
            placeholder="Ingrese observaciones adicionales sobre la orden de producción..."
            className="min-h-[200px] resize-none"
          />
        </div>
        
        <div className="text-sm text-muted-foreground">
          <p className="mb-2">
            <strong>Instrucciones:</strong> Utilice este espacio para incluir información adicional relevante para la orden de producción.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Instrucciones especiales de cargue o descargue</li>
            <li>Requerimientos específicos del cliente</li>
            <li>Información de contacto adicional</li>
            <li>Restricciones de horarios o fechas</li>
            <li>Cualquier otra información relevante</li>
          </ul>
        </div>
      </div>
    </Card>
  );
}