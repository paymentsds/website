import React from "react"
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {materialOceanic} from 'react-syntax-highlighter/dist/esm/styles/prism'
import styles from "./terminal.module.css"

const Terminal = () => {
  const codeExample = `
    import {Client} from "@paymentsds/mpesa";

    const client = new Client({
        apiKey: "<REPLACE>", 
        publicKey: "<REPLACE>", 
        serviceProviderCode: "<REPLACE>", 
    })

    const paymentData = {
        from: "841234567", 
        reference: "11114",
        transation: "T12344CC", 
        amount: "10", 
    }

    client
        .receive(paymentData)
        .then(r => {
            console.log(r.data)
        })
        .catch(e => {
            console.log(e)
        })
  `

  return (
    <div className={styles.main}>
      <SyntaxHighlighter style={materialOceanic}  language={"javascript"}>
        {codeExample}
      </SyntaxHighlighter>
    </div>
  )
}

export default Terminal
