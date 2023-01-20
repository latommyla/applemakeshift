import React from 'react'

export default function Warranty() {
    return (
        <div class="m-auto pb-10 pt-16 p-2 max-w-screen-lg">
            <p class="p-10 font-bold text-3xl md:text-5xl mt-2 text-center"> Warranty </p>
            <div class="flex pb-6">
                <div class="p-2">
                    <p><b>Stools Warranty:</b> 30 days</p>
                    <br></br>
                    <p> Covers manufacturer defects in material or workmanship under normal personal use within the first 30 days of purchase. </p>
                    <br></br>
                    <p><b>Arcade Warranty:</b> 3 years</p>
                    <br></br>
                    <p> For warranty claims please send a full photo of the product you received and zoomed in photos from different angles of the issue to <a class="hover:underline" href="mailto:warranty@creative-arcades.com">warranty@creative-arcades.com</a>.</p>
                    <br></br>
                    <p><b>Please note:</b> Warranty claims for broken or damaged parts caused by manufacturer defect will be replaced at Creative Arcade's expense. Only the parts required to return the product to full working condition will be replaced. Full refunds or returns are not available past the return period or for used products no longer in brand new unused condition. See <a class="hover:underline" href="/returnpolicy">Return Policy</a></p>
                    <br></br>
                    <p> Broken or damaged parts due to misuse or abuse are available for purchase at the customer's expense. </p>
                    <br></br>
                    <p> *Please include your full name, original order number, shipping address, and phone number. All of this information is required to initiate the warranty claim. </p>
                    <br></br>
                    <p>**Product purchased second hand or through unauthorized resellers as well as damage caused by wear and tear, abuse, misuse, negligence, weather, and alteration is not covered by warranty.</p>
                </div>
            </div>
        </div>
    );
}