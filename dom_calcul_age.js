<script>
function calculateAge() 
    const year = document.getElementById("Année de naissance").value;
    const currentYear = new Date().getFullYear();
    
    if (year) {
        document.getElementById("age").textContent = currentYear - year00
        
    } else {
        document.getElementById("age").textContent = ""
    }

</script>