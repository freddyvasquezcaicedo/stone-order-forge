import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { FormData } from "../ProductionOrderForm";
import FormField from "../FormField";
import BusinessLineSection from "../BusinessLineSection";

interface GeneralInfoTabProps {
  formData: FormData;
  updateFormData: (section: string, data: any) => void;
}

export default function GeneralInfoTab({ formData, updateFormData }: GeneralInfoTabProps) {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-primary mb-6">1. Información General</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <FormField label="Cliente" value={formData.cliente} />
          <FormField label="Estado" value={formData.estado} />
          <FormField label="Fecha Creación" value={formData.fechaCreacion} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <FormField label="Cupo Disponible" value={formData.cupoDisponible} />
          <FormField label="Tipo Moneda" value={formData.tipoMoneda} />
          <FormField label="TRM" value={formData.trm} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <FormField label="Ejecutivo Comercial" value={formData.ejecutivoComercial} />
          <FormField label="Soporte Comercial" value={formData.soporteComercial} />
          <FormField label="Tipo Servicio" value={formData.tipoServicio} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium bg-muted p-2 rounded-t">Línea de Negocio</label>
            <Select 
              value={formData.lineaNegocio} 
              onValueChange={(value) => updateFormData('lineaNegocio', value)}
            >
              <SelectTrigger className="border border-border rounded-b p-2">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cargaGeneral">Carga General</SelectItem>
                <SelectItem value="liquidos">Líquidos</SelectItem>
                <SelectItem value="extraDimensionada">Extra Dimensionada</SelectItem>
                <SelectItem value="refrigerada">Refrigerada</SelectItem>
                <SelectItem value="dta">DTA</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium bg-muted p-2 rounded-t">Tipo de Viaje</label>
            <Select 
              value={formData.tipoViaje} 
              onValueChange={(value) => updateFormData('tipoViaje', value)}
            >
              <SelectTrigger className="border border-border rounded-b p-2">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nacional">Nacional</SelectItem>
                <SelectItem value="internacional">Internacional</SelectItem>
                <SelectItem value="urbano">Urbano</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium bg-muted p-2 rounded-t">Cantidad Vehículos</label>
            <Input 
              type="number" 
              value={formData.cantidadVehiculos}
              onChange={(e) => updateFormData('cantidadVehiculos', parseInt(e.target.value))}
              className="border border-border rounded-b p-2"
              min={1}
            />
          </div>
        </div>
      </Card>
      
      <BusinessLineSection lineaNegocio={formData.lineaNegocio} />
    </div>
  );
}