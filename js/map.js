// Claim d3 and d3-sankey for intellisense (error checking & prompt)
/**@typedef {import('d3')} */
/**@typedef {import('d3-sankey')} */

//import config, easy to manage and modified if needed, makes file organized
import { map_config } from '../config/map_config.js';

//export function for other js to import, also for modular
export function draw_map(){
    console.info(map_config.helloWorld);
    console.info(map_config.helloD3JS);
}