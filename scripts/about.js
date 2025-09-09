const menuToggle = document.getElementById('menuToggle');
      const sidebar = document.getElementById('sidebar');
      const sidebarOverlay = document.getElementById('sidebarOverlay');
      const closeBtn = document.getElementById('closeBtn');

      // Function to open sidebar
      function openSidebar() {
        sidebar.classList.add('active');
        sidebarOverlay.classList.add('active');
        menuToggle.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
      }

      // Function to close sidebar
      function closeSidebar() {
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
        menuToggle.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
      }

      // Event listeners
      menuToggle.addEventListener('click', function() {
        if (sidebar.classList.contains('active')) {
          closeSidebar();
        } else {
          openSidebar();
        }
      });

      closeBtn.addEventListener('click', closeSidebar);
      sidebarOverlay.addEventListener('click', closeSidebar);

      // Close sidebar when pressing Escape key
      document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && sidebar.classList.contains('active')) {
          closeSidebar();
        }
      });

      // Handle window resize
      window.addEventListener('resize', function() {
        if (window.innerWidth > 900 && sidebar.classList.contains('active')) {
          closeSidebar();
        }
      });

      // Smooth scrolling for anchor links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth'
            });
          }
        });
      });

      // Add loading animation
      window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.3s ease';
        setTimeout(() => {
          document.body.style.opacity = '1';
        }, 100);
      });