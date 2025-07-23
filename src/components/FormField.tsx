interface FormFieldProps {
  label: string;
  value: string | number;
  isTextarea?: boolean;
}

export default function FormField({ label, value, isTextarea = false }: FormFieldProps) {
  return (
    <div className="space-y-0">
      <div className="bg-muted text-muted-foreground p-2 rounded-t text-sm">
        {label}
      </div>
      <div className={`border border-border rounded-b p-2 bg-white min-h-[40px] flex items-center ${
        isTextarea ? 'min-h-[80px] items-start pt-2' : ''
      }`}>
        <span className="text-sm">{value}</span>
      </div>
    </div>
  );
}