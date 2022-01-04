import React from 'react'
import './App.css'
import {useDispatch, useSelector} from 'react-redux'
import {addCashAction, getCashAction} from './store/cashReducer'
import {addCustomerAction, removeAllCustomersAction, removeCustomerAction} from './store/customerReducer'
import {fetchCustomers} from './asyncActions/customers'

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customer.customers)

  const addCash = (cash) => {
    dispatch(addCashAction(cash))
  }

  const getCash = (cash) => {
    dispatch(getCashAction(cash))
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    }

    dispatch(addCustomerAction(customer))
  }

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }
  const removeAllCustomers = () => {
    if (customers.length > 0) {
      dispatch(removeAllCustomersAction())
    }
  }

  return (
    <div className="App">
      <div className="container">
        <div className="buttons">
          <button className="button-add" onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
          <button className="button-remove" onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
        </div>
        <div className="count">Баланс: {cash}</div>
      </div>
      <div className="container">
        <div className="buttons">
          <button className="button-add" onClick={() => addCustomer(prompt())}>Добавить клиента</button>
          <button className="button-add" onClick={() => dispatch(fetchCustomers())}>Получить клиентов из базы</button>
          <button className="button-remove" onClick={() => removeAllCustomers()}>Удалить всех клиентов</button>
        </div>
        <div style={{width: '100%'}}>
          {customers.length > 0 ?
            <div className="customers">
              {customers.map(customer =>
                <div className="customer" onClick={() => removeCustomer(customer)}>{customer.name}</div>
              )}
            </div>
            :
            <div>
              Клиенты отсутствуют!
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default App
