import { openResultModal } from '../js/modalController'

describe("Function to open result model", () => {
    test("it should return 'Modal Opened'", () => {

        document.body.innerHTML = `<div id="id02" class="w3-modal w3-animate-opacity">
                                        <div class="w3-modal-content w3-card-4">
                                            <header class="w3-container w3-teal">
                                                <span onclick="Client.closeResultModal()" class="w3-button w3-large w3-display-topright">&times;</span>
                                                <h3 style="text-align: center; font-family: 'Roboto Condensed', sans-serif;font-size: 20px;font-weight: bold;">
                                                Result</h3>
                                            </header>
                                            <div class="w3-container" id="entryHolder">
                                            <!-- Here The UI data will shown Which is Created by Client Side Js -->
                                             </div>
                                        </div>
                                    </div>`
        // actual test
        document.getElementById('id02').style.display = 'block';


        expect(openResultModal()).toBe('Modal Opened');
    });
});
