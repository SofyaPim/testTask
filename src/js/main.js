import selectList from './modules/select';

window.addEventListener('DOMContentLoaded', () => {

    "use strict"; 

   selectList('.carrying-block', '.carrying-title', '.carrying-label');
   selectList('.loading-method-block', '.loading-method-title', '.loading-method-label');
   selectList('.cargo-select-block', '.cargo-select-title', '.cargo-select-label');
   selectList('.declared-value-block', '.declared-value-title', '.declared-value-label');
   selectList('.danger-class-block', '.danger-class-title', '.danger-class-label');
});