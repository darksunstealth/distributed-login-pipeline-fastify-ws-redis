
/* ===========================
   batch/loginBatch.js
   =========================== */

   import { sendBatchToAMQP } from "../../../../services/loginService/loginService.js";

   let _intervalId;
   
   export function startBatchProcessing(intervalMs = 10000) {
     // We store the interval so we can clear it in tests or if needed.
     _intervalId = setInterval(async () => {
       await sendBatchToAMQP();
     }, intervalMs);
   }
   
   export function stopBatchProcessing() {
     if (_intervalId) {
       clearInterval(_intervalId);
     }
   }
   