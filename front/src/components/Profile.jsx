import '../styles/paymentCard.css'

const exampleCards = [
  {
    lastFourNumbers: 4321,
    nameOnCard: "benjamin paiva",
    expiringDate: '10/33',
    cardType: 'mastercard',
  },
  {
    lastFourNumbers: 1234,
    nameOnCard: "santiago bernert",
    expiringDate: '10/33',
    cardType: 'visa',
  },
  {
    lastFourNumbers: 9876,
    nameOnCard: "mauro guarnieri",
    expiringDate: '10/33',
    cardType: 'maestro',
  },
]

for (let i = 0; i < exampleCards.length; i++) {
  exampleCards[i].cardType
}

const exampleItems = [
  {
    name: "buzito enano",
    price: 7500,
    size: 5
  },
  {
    name: "buzito egresado",
    price: 10000,
    size: 3
  },
  {
    name: "remeron dollar",
    price: 5500,
    size: 4
  },
]

const Profile = () => {
  return (
    <div className='profile grid grid-cols-3 gap-4 w-full h-full mt-32 justify-evenly'>
      <div className='cart border rounded-xl'>
        <h1 className='text-xl font-semibold text-center p-5 text-gruvbox-light-font'>Cart</h1>
      </div>
      <div className='paymentMethod bg-blue-500'>
        payment
      </div>
      <div className='address bg-yellow-500'>
        address
      </div>
    </div>
  )
}

export default Profile
