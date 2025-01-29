window.addEventListener("DOMContentLoaded", (event) => {
  // Toggle the side navigation
  document.body.classList.add("sb-sidenav-toggled");
  const sidebarToggle = document.body.querySelector("#sidebarToggle");
  const sidebar = document.querySelector(".sb-nav-fixed");

  if (sidebarToggle) {
    sidebarToggle.addEventListener("click", (event) => {
      event.preventDefault();
      document.body.classList.toggle("sb-sidenav-toggled");
      localStorage.setItem(
        "sb|sidebar-toggle",
        document.body.classList.contains("sb-sidenav-toggled")
      );
    });

    // // Close sidebar when clicking outside
    // document.addEventListener("click", (event) => {
    //   const isClickInsideNavbar = event.target.closest(".sb-nav");
    //   const isClickOnToggle = event.target.closest("#sidebarToggle");

    //   if (
    //     !isClickInsideNavbar &&
    //     !isClickOnToggle &&
    //     document.body.classList.contains("sb-sidenav-toggled")
    //   ) {
    //     document.body.classList.remove("sb-sidenav-toggled");
    //     localStorage.setItem("sb|sidebar-toggle", "false");
    //   }
    // });
  }
});
