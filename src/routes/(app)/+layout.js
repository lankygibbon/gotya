import { authStore} from "$lib/stores/authStore";
import { redirect } from "@sveltejs/kit";
import { get } from "svelte/store";

export const load = async () => {

    let authSt = get(authStore);
    if (!authSt.currentUser){
    redirect(302, "/");
    }
}