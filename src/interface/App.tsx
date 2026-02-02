import './App.css'
import { useFoodData } from '../hooks/useFoodData'
import Card from '../components/card'

function App(): JSX.Element {
    const { data } = useFoodData()

    return (
        <div className="container">
                <h1 className="title">Cardápio</h1>
            <div className="card-grid">
                {data?.map((foodData: any) => (
                    <Card
                        key={foodData.id}
                        title={foodData.title}
                        image={foodData.image}
                        price={foodData.price}
                    />
                ))}
            </div>
        </div>
    )
}

export default App
