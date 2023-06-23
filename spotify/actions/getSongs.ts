import {Song} from "@/types"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies, headers } from "next/headers" //"next/dist/client/components/headers"
const getSongs = async (): Promise<Song[]> => {
    const supabase = createServerComponentClient({
        cookies: cookies
    })

    const {data, error} = await supabase.from('songs')

}