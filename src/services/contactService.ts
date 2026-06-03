import type { ContactFormFields, ContactServiceResponse } from '../types/contact'

export const sendContactMessage = async (data: ContactFormFields): Promise<ContactServiceResponse> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Mensaje enviado con éxito al backend:', data)
            resolve({
                success: true,
                message: 'Message sent successfully!'
            })
        }, 1500)
    })
}