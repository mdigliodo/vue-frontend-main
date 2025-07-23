<script>
import { computed, reactive, ref, watch } from 'vue'

export function useForm (rules, fields = null) {
    // We can extract this logic from the component to a composable for better reusability
    const isSaving = ref(false)
    // If formData is not provided, we create a reactive object based on the rules
    // This assumes that the keys in rules correspond to the fields in the form
    // and initializes them with empty strings.
    const formData = fields
        ? reactive(fields)
        : reactive(
            Object.keys(rules).reduce((acc, field) => {
                acc[field] = ''
                return acc
            }, {}))

    const errors = reactive(Object.keys(rules).reduce((acc, field) => {
        acc[field] = []
        return acc
    }, {}))

    const touched = reactive(Object.keys(rules).reduce((acc, field) => {
        acc[field] = false
        return acc
    }, {}))

    // Validate a single field
    function validateField (key) {
        touched[key] = true
        const value = formData[key]
        const rulesObj = rules[key] || {}
        const ruleFns = Object.values(rulesObj)
        errors[key] = []
        for (const rule of ruleFns) {
            const error = rule(value, formData)
            if (error) {
                errors[key].push(error)
                return
            }
        }
    }

    function validateAllFields () {
        Object.keys(formData).forEach(f => validateField(f))
    }

    const isPristine = computed(() => {
        return Object.values(touched).every(v => !v)
    })

    const hasError = ref(false)
    watch(() => errors, (error) => {
        hasError.value = Object.values(error).some(e => {
            return e.length > 0
        })
    }, { deep: true })

    return {
        errors,
        formData,
        touched,
        hasError,
        isPristine,
        isSaving,
        validateField,
        validateAllFields,
    }
}

</script>
