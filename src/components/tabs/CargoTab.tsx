import { Card } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";
import { FormData } from "../ProductionOrderForm";
import FormField from "../FormField";

interface CargoTabProps {
  formData: FormData;
  updateFormData: (section: string, data: any) => void;
}

export default function CargoTab({ formData }: CargoTabProps) {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold text-primary mb-6">4. Información de Carga - Carga General</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <FormField label="Tipo de Carga" value={formData.carga.tipo} />
        <FormField label="Naturaleza de Carga" value={formData.carga.naturaleza} />
        <FormField label="Tipo de Empaque" value={formData.carga.tipoEmpaque} />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <FormField label="Descripción de la Mercancía" value={formData.carga.descripcion} isTextarea />
        <FormField label="Especificaciones" value={formData.carga.especificaciones} isTextarea />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <FormField label="Peso (Kg)" value={formData.carga.peso} />
        <FormField label="Volumen (m³)" value={formData.carga.volumen} />
        <div className="space-y-0">
          <div className="bg-muted text-muted-foreground p-2 rounded-t text-sm">
            Mercancía Peligrosa
          </div>
          <div className="border border-border rounded-b p-2 bg-white min-h-[40px] flex items-center">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 border rounded border-border bg-white flex items-center justify-center">
                {!formData.carga.mercancialPeligrosa && ''}
              </div>
              <span className="text-sm">No</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <FormField label="Valor Declarado" value={formData.carga.valorDeclarado} />
        <FormField label="Moneda" value={formData.carga.moneda} />
      </div>
      
      <div className="mb-4">
        <FormField label="Tipo de Póliza a Asociar" value={formData.carga.tipoPoliza} />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Alert className="bg-warning-light border-warning">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle className="text-warning-foreground">Alerta Esquema de Seguridad</AlertTitle>
          <AlertDescription className="text-warning-foreground">
            Requiere escolta por valor de mercancía
          </AlertDescription>
        </Alert>
        
        <div className="space-y-0">
          <div className="bg-muted text-muted-foreground p-2 rounded-t text-sm">
            Matriz de Seguridad
          </div>
          <div className="border border-border rounded-b p-2 bg-white min-h-[40px] flex items-center">
            <span className="text-sm text-primary underline cursor-pointer">Ver Matriz (PDF)</span>
          </div>
        </div>
        
        <FormField label="Customización de Carga" value={formData.carga.customizacion} />
      </div>
    </Card>
  );
}