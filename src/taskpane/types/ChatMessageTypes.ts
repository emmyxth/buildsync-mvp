export interface UserChatMessage {
    message: string;
    timestamp: number;
  }
  
  export interface BotChatMessage {
    message: string;
    timestamp: number;
    flowBoxes?: FlowBox[];
  }
  
  interface FlowBox {
    instructions: string;
    reference: string;
  }