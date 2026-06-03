import type { ContactFormFields, ContactServiceResponse } from '../types/contact'

export const sendContactMessage = async (data: ContactFormFields): Promise<ContactServiceResponse> => {
    const formId = import.meta.env.VITE_FORMSPREE_FORM_ID

    if (!formId) {
        console.error('Falta la variable de entorno VITE_FORMSPREE_FORM_ID')
        return { success: false, message: 'Missing form configuration.' }
    }

    try {
        const response = await fetch(`https://formspree.io/f/${formId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email,
                message: data.message
            })
        })

        if (response.ok) {
            return {
                success: true,
                message: 'Message sent successfully!'
            }
        } else {
            return {
                success: false,
                message: 'Failed to send message.'
            }
        }
    } catch (error) {
        console.error('Error enviando el formulario:', error)
        return {
            success: false,
            message: 'An error occurred while sending the message.'
        }
    }
}