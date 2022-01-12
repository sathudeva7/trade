import { QueryClient, QueryClientProvider } from "react-query";

import CryptoTracker from "./CryptoChart/CryptoTracker";
import "../Styles/Crypto.css";

const queryClient = new QueryClient();

export default function TradeValue({coin}) {
  console.log('1',coin)
    return (
    <QueryClientProvider client={queryClient}>
    <CryptoTracker cryptoName={coin} />
  </QueryClientProvider>
    )
}
