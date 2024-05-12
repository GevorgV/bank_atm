let bank =  [
    {
        id: 4421546958580005,
        fullname: "Armen Petrosyan",
        pin: 1020,
        price: 50000,
        history:[
            {
                id:1,
                price: 5000,
                type: "exit"
            },
            {
                id:2,
                price: 1000,
                type: "enter"
            }
        ]
    },
    {
        id: 4421546958580001,
        fullname: "Yura Simonyan",
        pin: 1015,
        price: 56000,
        history:[
            {
                id:1,
                price: 5000,
                type: "exit"
            },
            {
                id:2,
                price: 1000,
                type: "enter"
            }
        ]
    },
    {
        id: 4321546958580001,
        fullname: "Gevorg Grigoryan",
        pin: 7712,
        price: 500000,
        history:[
            {
                id:1,
                price: 5000,
                type: "exit"
            },
            {
                id:2,
                price: 1000,
                type: "enter"
            }
        ]
    }
]
function card(){
    let CardNum = +prompt("Please enter the card")
    let cardFilter = bank.filter(value => {
        if(CardNum === value['id'])
        {
            let pinNum = +prompt("Please enter PIN")
            if (pinNum === value['pin']){
                let balance = document.createElement('button');
                balance.innerText = "View Balance"
                document.body.appendChild(balance)
                balance.classList.add('balance')
                balance.addEventListener('click', () =>{
                    let bal = bank.filter(balValue => {
                        if (CardNum === balValue['id']){
                            console.table(balValue["fullname"] , balValue["price"])
                        }
                    })
                })
                let takeMoney = document.createElement('button');
                takeMoney.innerText = "Take Money"
                document.body.appendChild(takeMoney)
                takeMoney.classList.add('takeMoney')
                takeMoney.addEventListener('click', () => {
                    let taMon = +prompt("Enter money")
                    let take = bank.filter(takeValue => {
                        if (CardNum === takeValue['id']){
                            takeValue["price"] = takeValue["price"] - taMon
                            console.log(takeValue["price"])
                        }
                    })
                })
                let addMoney = document.createElement('button');
                addMoney.innerText = "Add Money"
                document.body.appendChild(addMoney)
                addMoney.classList.add('addMoney')
                addMoney.addEventListener('click', () => {
                    let addMon = +prompt("Enter money")
                    let add = bank.filter(addValue =>{
                        if (CardNum === addValue["id"]){
                            addValue["price"] = addValue["price"] + addMon
                            console.table(addValue["price"])
                        }
                    })
                })
                let exit = document.createElement('button');
                exit.innerText = "Exit"
                document.body.appendChild(exit)
                exit.classList.add('exit')
                exit.addEventListener('click', () =>{
                    document.querySelector(".balance").remove()
                    document.querySelector(".takeMoney").remove()
                    document.querySelector(".addMoney").remove()
                    document.querySelector(".exit").remove()
                })
            }else {
                alert("PIN code is not correct")
            }
        }
    })
}