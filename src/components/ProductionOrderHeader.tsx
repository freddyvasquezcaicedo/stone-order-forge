interface ProductionOrderHeaderProps {
  orderNumber: string;
}

export default function ProductionOrderHeader({ orderNumber }: ProductionOrderHeaderProps) {
  return (
    <div className="bg-primary text-primary-foreground p-6 rounded-lg flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold">STONE HUMADEA - CREACIÓN ORDEN DE PRODUCCIÓN</h1>
      <div className="text-xl font-semibold bg-white/20 px-4 py-2 rounded">
        {orderNumber}
      </div>
    </div>
  );
}