import { Card } from "@/components/ui/card";
import { FormData } from "../ProductionOrderForm";
import FormField from "../FormField";

interface DatesTabProps {
  formData: FormData;
  updateFormData: (section: string, data: any) => void;
}

export default function DatesTab({ formData }: DatesTabProps) {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold text-primary mb-6">6. Fechas y Tiempos</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <FormField label="Fecha de Cargue" value={formData.fechas.fechaCargue} />
        <FormField label="Fecha de Descargue" value={formData.fechas.fechaDescargue} />
        <FormField label="Fecha Límite de Entrega" value={formData.fechas.fechaLimiteEntrega} />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="space-y-0">
          <div className="bg-muted text-muted-foreground p-2 rounded-t text-sm">
            Devolución Contenedor
          </div>
          <div className="border border-border rounded-b p-2 bg-white min-h-[40px] flex items-center">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 border rounded border-border bg-white flex items-center justify-center">
                {!formData.fechas.devolucionContenedor && ''}
              </div>
              <span className="text-sm">No Aplica</span>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <FormField label="Instrucciones de Devolución" value={formData.fechas.instruccionesDevolucion} />
      </div>
    </Card>
  );
}