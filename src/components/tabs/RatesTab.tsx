import { Card } from "@/components/ui/card";
import { FormData } from "../ProductionOrderForm";
import FormField from "../FormField";

interface RatesTabProps {
  formData: FormData;
  updateFormData: (section: string, data: any) => void;
}

export default function RatesTab({ formData }: RatesTabProps) {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold text-primary mb-6">7. Tarifas y Fletes</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <FormField label="ID Tarifa" value={formData.tarifas.idTarifa} />
        <FormField label="Descripción Tarifa" value={formData.tarifas.descripcionTarifa} />
        <FormField label="Valor SICETAC" value={formData.tarifas.valorSicetac} />
        <FormField label="Flete Techo" value={formData.tarifas.fleteTecho} />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <FormField label="Valor Tarifa" value={formData.tarifas.valorTarifa} />
        <FormField label="Valor Flete" value={formData.tarifas.valorFlete} />
        <div className="space-y-0">
          <div className="bg-muted text-muted-foreground p-2 rounded-t text-sm">
            Rentabilidad
          </div>
          <div className="border border-border rounded-b p-2 bg-success-light min-h-[40px] flex items-center justify-center">
            <span className="text-sm font-bold text-success">
              {formData.tarifas.rentabilidad}
            </span>
          </div>
        </div>
        <div className="space-y-0">
          <div className="bg-muted text-muted-foreground p-2 rounded-t text-sm">
            Aprobación Excepcional
          </div>
          <div className="border border-border rounded-b p-2 bg-white min-h-[40px] flex items-center">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 border rounded border-border bg-white flex items-center justify-center">
                {!formData.tarifas.aprobacionExcepcional && ''}
              </div>
              <span className="text-sm">No</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}