function calculateSales ( clientList ) {
    const tickectPrice = 25;
    const vaniaCurrentMoney = 0;
    
    try {
      
      const tryToPay = (vaniaCurrentMoney, clientMoney) => {
        if ( (clientMoney - tickectPrice) > vaniaCurrentMoney + tickectPrice ) {
          return false
        } else {
          vaniaCurrentMoney += tickectPrice
          return true
        }
      }
      
      clientList.forEach( ( clientMoney, clientId ) => {
         if ( !tryToPay( vaniaCurrentMoney, clientMoney ) ) {
          throw `No money to charge client ${clientId+1}`
         }
      })
      
      return true
      
    } catch (error) {
      console.log(error)
      return false
    }
  }
  
  if ( calculateSales( [25, 25, 50, 50, 100] ) ) {
    console.log('Charge possible')
  } else {
    console.log('Charge NO possible')
  }