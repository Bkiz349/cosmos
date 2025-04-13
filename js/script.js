
document.addEventListener('DOMContentLoaded', function () {
   let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
   tooltipTriggerList.forEach(function (tooltipTriggerEl) {
   new bootstrap.Tooltip(tooltipTriggerEl);
   });

  

   const productTrigger = new bootstrap.Popover(document.querySelector('#products'), {
      content: `
         
      <div class="mb-3 p-4">
         <h6 class="text-uppercase mb-2 text-mute">Interchain Stack</h6>
         <div class="row gx-3 gy-2 border-bottom border-secondary pb-3">
            <div class="col-4">
            <strong>Cosmos SDK</strong><br>
            <small class="text-mute">Get started with appchains</small>
            </div>
            <div class="col-4">
            <strong>Cosmos EVM</strong><br>
            <small class="text-mute">Build EVM-compatible chains</small>
            </div>
            <div class="col-4">
            </div>
            <hr>
            <div class="col-4">
            <strong>IBC Protocol</strong><br>
            <small class="text-mute">Cross-chain interoperability</small>
            </div>
            <div class="col-4">
            <strong>CometBFT</strong><br>
            <small class="text-mute">Best-in-class POS consensus</small>
            </div>
            <div class="col-4">
            <strong>CosmWasm</strong><br>
            <small class="text-mute">Smart contracting for appchains</small>
            </div>
            
         </div>

          <div>
          <hr>
         <h6 class="text-uppercase text-secondary mb-2">Solutions</h6>
         <div class="row gx-3 gy-2">
            <div class="col-4">
            <strong>IBC Eureka</strong><br>
            <small class="text-mute">One network, infinite chains</small>
            </div>
            <div class="col-4">
            <strong>Hydro</strong><br>
            <small class="text-mute">Liquidity for the Interchain</small>
            </div>
            <div class="col-4">
            <strong>Forge</strong><br>
            <small class="text-mute">Launch on Interchain Security</small>
            </div>
         </div>
      </div>
      </div> 
   `,
      html: true,
      trigger: 'hover'
   });

   const developerTrigger = new bootstrap.Popover(document.querySelector('#developers'), {
      content: `
         
      <div class="mb-3 p-4">
         <h6 class="text-uppercase mb-2 text-mute">Learn</h6>
         <p>Tutorials ↗</p>
         <p>Learn fundamentals of the Interchain.</p>
         <hr>
         <div class="row gx-3 gy-2">
            <div class="col-6">
            <p> Explore the Documentation ↗</p>
            <p>FAQ </p>
            <p>Tools and Resources</p>
            </div>
            <div class="col-6">
            <p>Builder prograam </p>
            <p>Developer Community ↗</p>
         </div>
       </div>

         `,
         html: true,
         trigger: 'hover'
   });
   

   const resourceTrigger = new bootstrap.Popover(document.querySelector('#resources'), {

   content: `
      <div class="mb-3 p-4">
         <h6 class="text-uppercase mb-2 text-mute">Interchain Tools</h6>
         <div class="row gx-3 gy-2">
            <div class="col-6">
            <p> Wallet </p>
            <p>Blog Explorer </p>
            </div>
            <div class="col-6">
            <p>Interchain Ecosystem</p>
            <p>Tokens</p>
         </div>
         <h6 class="text-uppercase mb-2 text-mute">Community</h6>
         <div class="row gx-3 gy-2">
            <div class="col-6">
               <p> Developer Chat ↗</p>
               <p> Ecosystem Blog ↗</p>
            </div>
            <div class="col-6">
               <p> Community Chat ↗</p>
               <p> Discussion Forum ↗</p>
            </div>
         </div>
      </div>
   `,
   html: true,
   trigger: 'hover'
   });


    let popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
   let popoverList = [...popoverTriggerList].map((popoverEl) => new bootstrap.Popover(popoverEl));

   
   const contactTrigger = new bootstrap.Popover(document.querySelector('#contact'), {
      content: `
      <div class="m-3">
         <h6 class="text-uppercase mb-2 text-white-50">Contact</h6>
         <p>Contact Forum </p>
         <p class="text-white-50">Contact an Interchain expert</p>
      </div>
   `,
   html: true,
   trigger: 'hover'
   });


   // 
});

