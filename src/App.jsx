
import './App.css'
import fruitlogo from "./assets/screenshot-logo.png";
import {useState} from "react";

function App() {
    const [strawberries, setStrawberries] = useState(0);
    const [bananas, setBananas] = useState(0);
    const [apples, setApples] = useState(0);
    const [kiwis, setKiwis] = useState(0);

    const [formValues, setFormValues] = useState({
        firstname:'',
        lastname:'',
        age:0,
        zipcode:'',
        deliveryType:'weekly',
        deliveryTime:'daytime',
        remark:'',
        agreement:false,
});

    function resetFruit()
        {setApples(0);
        setStrawberries(0);
        setBananas(0);
        setKiwis(0);
    }
    // -----  form handle functies ---------

    //hnadler voor de submit knop met de consolelogjes
    function handleSubmit(e){
        e.preventDefault();
        console.log(`fruit ordered: ${strawberries} strawberries, ${bananas} bananas, ${apples} apples and ${kiwis} kiwis.`);
        console.log("orderdetails:")
        console.log(`firstname: ${formValues.firstname}, lastname: ${formValues.lastname}, age: ${formValues.age}, zipcode: ${formValues.zipcode}, deliveryType: ${formValues.deliveryType}, deliveryTime: ${formValues.deliveryTime}, customer remark: ${formValues.remark},agreement with terms: ${formValues.agreement} `);
    }

    //generieke handler om live velden bij te werken van tekstvelden en die daarop lijken
    function handleChange(e){
        const changedFieldName = e.target.name;

        setFormValues({
            ...formValues,
            [changedFieldName]: e.target.value,
        });
    }

  return (
    <>
        <main className="outer-container">
            <img src={fruitlogo} alt="fruitlogo"/>
            {/*fruit counters*/}
            <h1>Kies fruitigheid </h1>

            <article className="fruit-container">
                <h2> &#127827; Aardbeien</h2>
                <button
                    type="button"
                    onClick={()=>setStrawberries(strawberries-1)}
                    disabled={strawberries<=0}
                >-</button>
                <p> {strawberries} </p>
                <button
                    type="button"
                    onClick={() => setStrawberries(strawberries+1) }
                >+</button>
            </article>

            <article className="fruit-container">
                <h2> &#127820; Bananen</h2>
                <button
                    type="button"
                    onClick={() => setBananas(bananas-1)}
                    disabled={bananas<=0}
                >-</button>
                <p>{bananas}</p>
                <button
                    type="button"
                    onClick={() => setBananas(bananas+1)}
                >+</button>
            </article>

            <article className="fruit-container">
                <h2> &#127822; Appels</h2>
                <button
                    type="button"
                    onClick={() => setApples(apples-1)}
                    disabled={apples<=0}
                >-</button>
                <p>{apples}</p>
                <button
                    type="button"
                    onClick={() => setApples(previous => previous+1)} //hier gerbuik gemaakt van de previous state
                >+</button>
            </article>

            <article className="fruit-container">
                <h2> &#129373; Kiwi&apos;s</h2>
                <button
                    type="button"
                    onClick={() => setKiwis(kiwis-1)}
                    disabled={kiwis<=0}
                >-</button>
                <p>{kiwis}</p>
                <button
                    type="button"
                    onClick={() => setKiwis(kiwis+1)}
                >+</button>
            </article>
            <button type="button"
                    className="big-button"
                    onClick={()=>resetFruit()}
            >Reset</button>
            {/*formulier ------------------------------------------------------------*/}
            <form onSubmit={handleSubmit} className="form-container" >
                <h2> Bestellen</h2>
                <fieldset className="form-fields">
                    <label> Voornaam
                        <input type="text"
                               name="firstname"
                               placeholder="jouw voornaam"
                                value={formValues.firstname}
                               onChange={handleChange}
                        />
                    </label>

                    <label> Achternaam
                        <input type="text"
                               name="lastname"
                               placeholder="jouw voornaam"
                               value={formValues.lastname}
                               onChange={handleChange}
                        />
                    </label>

                    <label> Leeftijd
                        <input type="number"
                               name="age"
                               value={formValues.age}
                               onChange={handleChange}
                        />
                    </label>

                    <label> Postcode
                        <input type="text"
                               name="zipcode"
                               placeholder="jouw postcode"
                               value={formValues.zipcode}
                               onChange={handleChange}
                        />
                    </label>
                </fieldset>
                <fieldset className="form-fields">
                    <label> Bezorgfrequentie
                        <select
                            name="deliveryType"
                            value={formValues.deliveryType}
                            onChange={handleChange}
                            >
                            <option value="weekly" >iedere week</option>
                            <option value="biweekly">om de week</option>
                            <option value="monthly" >maandelijks</option>
                        </select>
                    </label>

                    <div>{/* groepje radio buttons*/}
                        <label> Overdag
                            <input type="radio"
                            name="deliveryTime"
                            value="daytime"
                            checked={formValues.deliveryTime === "daytime"}
                            onChange={handleChange}/>
                         </label>

                        <label> 's Avonds
                            <input type="radio"
                             name="deliveryTime"
                             value="evening"
                             checked={formValues.deliveryTime === "evening"}
                             onChange={handleChange}/>
                        </label>
                    </div>
                </fieldset>
                <fieldset className="form-fields">
                    <label htmlFor="remark-field">Opmerking</label>
                        <textarea
                            id="remark-field"
                            name="remark"
                            rows="4" cols="50"
                            value={formValues.remark}
                            onChange={handleChange}
                        ></textarea>


                    <label><input type="checkbox"
                                  name="agreement"
                                  checked={formValues.agreement}
                                  //*custom onchange handler*/
                                  onChange={()=>{setFormValues({
                                      ...formValues,
                                      agreement: !formValues.agreement,
                                  })}}
                    /> Ik ga akkoord met de voorwaarden </label>


                </fieldset>
               <fieldset className="form-fields">
                <button
                    type="submit"
                    className="big-button"
                    disabled={!formValues.agreement}
                >Verzenden</button>
            </fieldset>

            </form>
        </main>
    </>
  )
}

export default App
