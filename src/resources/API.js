import { supabase } from "$lib/supabaseClient";
import { error } from "@sveltejs/kit";

//Authentication
// @ts-ignore
export async function createUser (name, email, password) {
    const { data, error } = await supabase.auth.signUp ({
      email: email,
      password: password,
      metadata: {
        name: name
      }

    })

    return {data, error}
}

export async function logIn (email, password) {
  const {data, error} = await supabase.auth.signInWithPassword({
    email: email,
    password: password
  })

  return {data, error}
}

export async function checkSession () {
  const {data, error} = await supabase.auth.getUser()
  return {data, error}
}

export async function signOut () {
  const signOut= await supabase.auth.signOut()
  return signOut
}

//Navigation
export function redirectTo (url) {
  location.href = url
}

//Tickets and events
export async function createEventForUser (
  email, name, location, desc, date, time, amount, price, aitelMoney, Mpamba
) {
  const evtCode = generateRandomString()

  const event_details = JSON.stringify({
    evtCode: evtCode,
    name: name,
    desc: desc,
    location: location,
    date: date,
    time: time
  })

  const payment_gateways = JSON.stringify({
    aitel_money: aitelMoney,
    mpamba: Mpamba
  })

  const {data, error} = await supabase.from('Events').insert (
    {
      event_for: email,
      event_details: event_details,
      payment_gateway: payment_gateways,
      target_amount: amount,
      price: price
    }
  )

  return {data, error}

}

//Notifications
export async function notify (email, title, message) {
  const {data, error} = await supabase.from('Notifications').insert (
    {
      email: email,
      title: title,
      message: message
    }
  )

  return {data, error}
}

export async function getUnreadNotifications (email) {
  const {data, error}= await supabase.from('Notifications')
  .select('title')
  .match({
    email: email,
    viewed: false
  })

  return {data, error}
}

export async function viewAllNotifications (email) {
  const {data, error} = await supabase.from('Notifications')
  .update({viewed: true})
  .eq('email', email)
  .select()

  return {data, error}
}

export async function forgotpassword (email) {  
  const { data, error } = await supabase.auth.signInWithOtp({
    email: email,
  })
  

  return {data, error}
}

export async function getNotifications (email) {
  const {data, error}= await supabase.from('Notifications')
  .select('*')
  .eq('email', email)

  return {data, error}
}

export async function getUserEvents (email, range) {
  const {data, error} = await supabase.from('Events')
    .select('*')
    .eq('event_for', email)
    .range(range.min, range.max)

  return {data, error}
}

//Get all available events
export async function getAllEvents (range) {
  const {data, error} = await supabase.from ('Events')
    .select('*')
    .order('sold', {ascending: false})
    .match ({
      sold_out: false,
      veified: true
    })
    .range(range.min, range.max)

  return {data, error}
}

//Search for event
export async function searchForEvent (string) {
  const request = await getAllEvents({min: 0, max: 10000})
  const evts = request.data
  const matched = []

  for (let i = 0; i < evts.length; i++) {
    const thisEvt = evts[i]

    if (thisEvt.event_details.toLowerCase().includes(string.toLowerCase())) {
      matched.push(thisEvt)
    }
    
  }

  return matched
}

export async function uploadTickets (tktArr) {
  return supabase.from('Tickets').insert(tktArr)
}

export async function getTickets (email) {
  const {data, error} = await supabase.from('Tickets')
    .select('*')
    .eq('ticket_for', email)

  return {data, error}
}

export async function getTicketByCode (code) {
  const {data, error} = await supabase.from('Tickets')
    .select('*')
    .eq('code', code)

  return {data, error}
}

export async function deleteTicket (code) {
  const { error } = await supabase
  .from('Tickets')
  .delete()
  .eq('code', code)

  return {error}
}

export async function verifyTicket(code) {
  const { data, error } = await supabase
  .from('Tickets')
  .update({ verified: false })
  .eq('code', code)
  .select()

  return {data, error}
}

export function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

export function generateRandomString() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 8; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

