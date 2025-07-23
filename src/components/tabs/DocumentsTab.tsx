import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";
import { FormData } from "../ProductionOrderForm";

interface DocumentsTabProps {
  formData: FormData;
  updateFormData: (section: string, data: any) => void;
}

interface DocumentItem {
  label: string;
  required: boolean;
  status: 'Pendiente' | 'Recomendado' | 'Opcional';
}

const getDocumentsByBusinessLine = (lineaNegocio: string): DocumentItem[] => {
  switch (lineaNegocio) {
    case 'cargaGeneral':
      return [
        { label: 'Certificado de Seguro de Mercancías', required: true, status: 'Pendiente' },
        { label: 'Lista de Empaque', required: false, status: 'Recomendado' },
        { label: 'Ficha Técnica del Producto', required: false, status: 'Opcional' },
        { label: 'Carta de Porte (si aplica)', required: false, status: 'Opcional' }
      ];
    case 'liquidos':
      return [
        { label: 'Ficha Técnica del Producto', required: true, status: 'Pendiente' },
        { label: 'Hoja de Seguridad (MSDS)', required: true, status: 'Pendiente' },
        { label: 'Tarjeta de Emergencia', required: true, status: 'Pendiente' },
        { label: 'Certificado de Seguro', required: true, status: 'Pendiente' },
        { label: 'Certificación del Tanque', required: false, status: 'Recomendado' },
        { label: 'Plan de Contingencia', required: false, status: 'Recomendado' }
      ];
    case 'extraDimensionada':
      return [
        { label: 'Permiso de Tránsito Especial', required: true, status: 'Pendiente' },
        { label: 'Certificado de Seguro', required: true, status: 'Pendiente' },
        { label: 'Estudio de Rutas', required: true, status: 'Pendiente' },
        { label: 'Plan de Contingencia', required: true, status: 'Pendiente' },
        { label: 'Plan de Izaje (si aplica)', required: false, status: 'Opcional' }
      ];
    case 'refrigerada':
      return [
        { label: 'Certificado de Cadena de Frío', required: true, status: 'Pendiente' },
        { label: 'Ficha Técnica del Producto', required: true, status: 'Pendiente' },
        { label: 'Certificado de Seguro', required: true, status: 'Pendiente' },
        { label: 'Plan de Contingencia', required: false, status: 'Recomendado' }
      ];
    case 'dta':
      return [
        { label: 'Declaración de Tránsito Aduanero', required: true, status: 'Pendiente' },
        { label: 'Documentos de Origen', required: true, status: 'Pendiente' },
        { label: 'Certificado de Seguro', required: true, status: 'Pendiente' },
        { label: 'Manifiesto de Carga', required: true, status: 'Pendiente' }
      ];
    default:
      return [];
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Pendiente':
      return 'bg-destructive/10 text-destructive';
    case 'Recomendado':
      return 'bg-warning/10 text-warning';
    case 'Opcional':
      return 'bg-muted text-muted-foreground';
    default:
      return 'bg-muted text-muted-foreground';
  }
};

export default function DocumentsTab({ formData }: DocumentsTabProps) {
  const documents = getDocumentsByBusinessLine(formData.lineaNegocio);
  
  const getBusinessLineName = (lineaNegocio: string) => {
    switch (lineaNegocio) {
      case 'cargaGeneral': return 'Carga General';
      case 'liquidos': return 'Líquidos';
      case 'extraDimensionada': return 'Extra Dimensionada';
      case 'refrigerada': return 'Refrigerada';
      case 'dta': return 'DTA';
      default: return 'General';
    }
  };

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold text-primary mb-6">7. Documentos</h2>
      
      <Alert className="mb-6">
        <Info className="h-4 w-4" />
        <AlertTitle>Información de documentos</AlertTitle>
        <AlertDescription>
          A continuación se muestran los documentos recomendados según la línea de negocio. 
          Los documentos marcados con <span className="text-destructive font-bold">*</span> son 
          obligatorios para este tipo de operación.
        </AlertDescription>
      </Alert>
      
      <div className="space-y-6">
        <h3 className="text-lg font-medium text-primary border-b border-border pb-2">
          Documentos para {getBusinessLineName(formData.lineaNegocio)}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {documents.map((doc, index) => (
            <div key={index} className="space-y-0">
              <div className="bg-muted text-muted-foreground p-2 rounded-t text-sm">
                {doc.label} {doc.required && <span className="text-destructive font-bold">*</span>}
              </div>
              <div className="border border-border rounded-b p-2 bg-white min-h-[50px] flex items-center justify-between">
                <Button variant="outline" size="sm" className="min-w-[120px]">
                  Adjuntar
                </Button>
                <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(doc.status)}`}>
                  {doc.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}