<script>
import { reactive } from 'vue'

export function useModal () {
    const isOpen = reactive({ value: false })

    const openModal = () => {
        isOpen.value = true
    }

    const closeModal = () => {
        isOpen.value = false
    }

    return {
        isOpen,
        openModal,
        closeModal,
    }
}

</script>;
