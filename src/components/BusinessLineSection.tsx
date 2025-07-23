import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

interface BusinessLineSectionProps {
  lineaNegocio: string;
}

export default function BusinessLineSection({ lineaNegocio }: BusinessLineSectionProps) {
  const renderContent = () => {
    switch (lineaNegocio) {
      case 'cargaGeneral':
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-primary">Información Específica - Carga General</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Tipo de Carga</label>
                <Select defaultValue="cargaSeca">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cargaSeca">Carga Seca</SelectItem>
                    <SelectItem value="granel">Granel</SelectItem>
                    <SelectItem value="contenedor">Contenedor</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Restricciones de Altura</label>
                <Input placeholder="Ingrese restricciones" />
              </div>
            </div>
          </div>
        );
        
      case 'liquidos':
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-primary">Información Específica - Líquidos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Tipo de Líquido</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="combustible">Combustible</SelectItem>
                    <SelectItem value="aceite">Aceite</SelectItem>
                    <SelectItem value="leche">Leche</SelectItem>
                    <SelectItem value="otros">Otros</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Viscosidad</label>
                <Input placeholder="Viscosidad" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Temperatura Requerida</label>
                <Input placeholder="°C" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Certificaciones Requeridas</label>
              <Textarea placeholder="Certificaciones requeridas" className="h-16" />
            </div>
          </div>
        );
        
      case 'extraDimensionada':
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-primary">Información Específica - Extra Dimensionada</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Alto (m)</label>
                <Input type="number" step="0.01" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Ancho (m)</label>
                <Input type="number" step="0.01" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Largo (m)</label>
                <Input type="number" step="0.01" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="requiereEscolta" />
                <label htmlFor="requiereEscolta" className="text-sm font-medium">
                  Requiere Vehículo Escolta
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="requierePermiso" />
                <label htmlFor="requierePermiso" className="text-sm font-medium">
                  Requiere Permiso Especial
                </label>
              </div>
            </div>
          </div>
        );
        
      case 'refrigerada':
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-primary">Información Específica - Refrigerada</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Temperatura Mínima (°C)</label>
                <Input type="number" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Temperatura Máxima (°C)</label>
                <Input type="number" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Humedad Requerida (%)</label>
                <Input type="number" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Tipo de Producto</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="frutas">Frutas y Verduras</SelectItem>
                    <SelectItem value="carnes">Carnes</SelectItem>
                    <SelectItem value="lacteos">Lácteos</SelectItem>
                    <SelectItem value="vacunas">Vacunas/Medicamentos</SelectItem>
                    <SelectItem value="otros">Otros</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Vida Útil del Producto (días)</label>
                <Input type="number" />
              </div>
            </div>
          </div>
        );
        
      case 'dta':
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-primary">Información Específica - DTA (Declaración de Tránsito Aduanero)</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Número de Declaración</label>
                <Input placeholder="Ingrese número DTA" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Aduana de Partida</label>
                <Input />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Aduana de Destino</label>
                <Input />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Documentos Requeridos</label>
              <Textarea placeholder="Lista de documentos" className="h-16" />
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <Card className="p-6">
      {renderContent()}
    </Card>
  );
}