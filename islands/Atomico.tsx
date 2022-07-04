/** @jsx h */
import { JSXElement } from "atomico";
import { auto } from "@atomico/react/preact";
import { Counter } from "../components/atomico-counter.ts";

/**
 * @todo
 * esm.sh does not correctly resolve the
 * @atomico/react module, hence this type patch
 */

export default auto(Counter) as (props: JSXElement<typeof Counter>) => any;
