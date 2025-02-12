import React from 'react'
import './Map.css'

const Map = () => {
    return (
        <div id="map">
            <div className="custom-container map__cont">
                <div className="row map__title">
                    <div className="col-12 map__title__col">
                        <h1>Getting here</h1>
                    </div>
                </div>
                <div className="row map__row">
                    <div className="col-8 map__col">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.662006842939!2d-0.12953152383517666!3d51.51941660982606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b323093d307%3A0x2fb199016d5642a7!2sBritaniya%20muzeyi!5e0!3m2!1saz!2saz!4v1719751644039!5m2!1saz!2saz" width="887" height="499" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="col-4 map__col">
                        <p>Main entrance: <br />
                            The British Museum <br />
                            Great Russell Street, <br />
                            London WC1B 3DG <br />
                            (what3words: <a target='_blank' href="https://what3words.com/young.verge.moves">///young.verge.moves</a> )</p>
                        <p>Second entrance: <br />
                            Montague Place <br />
                            London WC1E 7JW <br />
                            (what3words: <a target='_blank' href="https://what3words.com/cooks.waddled.cook">///cooks.waddled.cook</a> )</p>
                        <p>We recommend using the Transport For London (TFL) <a target='_blank' href="https://tfl.gov.uk/plan-a-journey/">Journey Planner</a> to plan your trip to the Museum.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Map