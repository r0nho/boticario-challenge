export interface Shipment {
    id: string;
    name: string;
    cargo: [
      {
        type: string;
        description: string;
        volume: string;
      }
    ],
    mode: string;
    type: string;
    destination: string;
    origin: string;
    services: [
      {
        type: string;
      }
    ],
    total: string;
    status: string;
    userId: string;
};