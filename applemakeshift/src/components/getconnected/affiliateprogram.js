import React from 'react'

import GoAffPro from '../images/misc/goaffpro.png'

export default function AffiliateProgram() {
    return (
        <div class="m-auto pb-20 pt-16 p-2 max-w-screen-lg">
            <p class="p-10 font-bold text-3xl md:text-5xl mt-2 text-center"> Affiliate Program Terms & Conditions </p>
            <div class="flex pb-6">
                <div class="m-auto p-2">
                    <p> Affiliate programs are beneficial for companies and end users alike. Companies benefit from increased exposure and sales, as affiliates help to spread awareness of their products and services and generate new customers. End users benefit from the discounts and other incentives offered by the affiliate program, as well as from having a wider selection of choices when it comes to products and services. Furthermore, when end users refer other customers to an affiliate program, they may receive additional discounts or rewards. By leveraging the power of word-of-mouth and referrals, companies can expand their reach and build brand loyalty. Affiliate programs are also a great way to reward customers for their loyalty. </p>
                    <br></br>
                    <p class="font-bold"> By clicking on the signup link, you’re agreeing to the following terms and conditions: </p>
                    <ul class="list-disc leading-loose">
                        <li class="ml-5"> All content must be original and not infringe upon any third party intellectual property rights </li>
                        <li class="ml-5"> Affiliates must be 18 years of age or older - Affiliates are responsible for all taxes, fees, and legal compliance TERMS & CONDITIONS </li>
                    </ul>
                    <br></br>
                    <ul class="list-decimal leading-loose">
                        <li class="ml-6 font-bold"> Payment </li>
                        <p class="ml-8"> 1.1 Payment for services rendered through the affiliate program will be sent 30 days after delivery of goods or services. </p>
                        <li class="ml-6 font-bold"> Coupon Farming </li>
                        <p class="ml-8"> 2.1 Coupon Farming is prohibited, and any accounts found to be participating in coupon farming will be removed from the program without prior notice. </p>
                        <li class="ml-6 font-bold"> Commission </li>
                        <p class="ml-8"> 3.1 Affiliates will receive 3% of the sale, as well as an introductory 5% off the order for the user of the code. </p>
                        <li class="ml-6 font-bold"> Content </li>
                        <p class="ml-8"> 4.1 All content created by affiliates must be original and not infringe upon any third-party intellectual property rights. </p>
                        <li class="ml-6 font-bold"> Age Requirement </li>
                        <p class="ml-8"> 5.1 All affiliates must be 18 years of age or older. </p>
                        <li class="ml-6 font-bold"> Legal Compliance </li>
                        <p class="ml-8"> 6.1 Affiliates are responsible for all taxes, fees, and legal compliance related to their participation in the affiliate program. </p>
                    </ul>
                    <br></br>
                    <p class="font-bold italic"> Creative Arcades reserves the right to deny payment to any affiliates who are found to be in violation of our Terms & Conditions. We may also suspend or terminate the accounts of any affiliates who fail to comply with our Terms & Conditions. All decisions made by Creative Arcades are final and binding. </p>
                </div>
            </div>
            <div class="flex pt-10">
                <div class="m-auto">
                    <p class="text-center text-2xl font-bold pb-10"> Click the image below to apply! </p>
                    <a href="https://creative-arcades.goaffpro.com/"><img class="m-auto w-64" src={GoAffPro} alt="Goaffpro Logo" /></a>
                </div>
            </div>
        </div>
    );
}