const commands = [
  /* ===========================
     FILE MANAGEMENT
  ============================ */
  {
    cmd: "ls",
    category: "file",
    def: "List directory contents. Common switches: `-l` long format, `-a` show hidden files, `-h` human-readable sizes.",
    shortDef: "List files and directories.",
    flashcard: true,
    questions: [
      {
        type: "mcq",
        question: "Which `ls` option shows hidden files?",
        options: ["-a", "-l", "-h"],
        answer: "-a"
      },
      {
        type: "text",
        question: "What command lists files in long format?",
        answer: "ls -l"
      }
    ]
  },
  {
    cmd: "pwd",
    category: "file",
    def: "Print the current working directory path.",
    shortDef: "Show current directory.",
    flashcard: true,
    questions: [
      {
        type: "text",
        question: "Which command prints your current working directory?",
        answer: "pwd"
      }
    ]
  },
  {
    cmd: "cd",
    category: "file",
    def: "Change the current working directory. Use `cd ..` to move up one level, `cd ~` to go to home.",
    shortDef: "Change directory.",
    flashcard: true,
    questions: [
      {
        type: "text",
        question: "What command moves you up one directory level?",
        answer: "cd .."
      },
      {
        type: "mcq",
        question: "Which command takes you back to your home directory?",
        options: ["cd /", "cd ~", "cd home"],
        answer: "cd ~"
      }
    ]
  },
  {
    cmd: "mkdir",
    category: "file",
    def: "Create a new directory. Example: `mkdir myfolder`. Use `-p` to create parent directories as needed.",
    shortDef: "Make directory.",
    flashcard: true,
    questions: [
      {
        type: "text",
        question: "What command creates a new directory named 'test'?",
        answer: "mkdir test"
      },
      {
        type: "mcq",
        question: "Which option lets `mkdir` create parent directories automatically?",
        options: ["-r", "-p", "-a"],
        answer: "-p"
      }
    ]
  },
  {
    cmd: "rmdir",
    category: "file",
    def: "Remove an empty directory. Example: `rmdir myfolder`. For non-empty directories use `rm -r`.",
    shortDef: "Remove empty directory.",
    flashcard: true,
    questions: [
      {
        type: "text",
        question: "What command removes an empty directory named 'old'?",
        answer: "rmdir old"
      }
    ]
  },
  {
    cmd: "rm",
    category: "file",
    def: "Remove files or directories. Example: `rm file.txt`, `rm -r dir`. Options: `-f` force, `-i` interactive.",
    shortDef: "Remove files/directories.",
    flashcard: true,
    questions: [
      {
        type: "mcq",
        question: "Which option makes `rm` remove directories recursively?",
        options: ["-d", "-r", "-f"],
        answer: "-r"
      },
      {
        type: "mcq",
        question: "Which option forces deletion without prompting?",
        options: ["-r", "-i", "-f"],
        answer: "-f"
      }
    ]
  },
  {
    cmd: "touch",
    category: "file",
    def: "Create an empty file or update the timestamp of an existing file. Example: `touch file.txt`.",
    shortDef: "Create empty file / update timestamp.",
    flashcard: true,
    questions: [
      {
        type: "text",
        question: "What command creates an empty file named 'notes.txt'?",
        answer: "touch notes.txt"
      }
    ]
  },
  {
    cmd: "cp",
    category: "file",
    def: "Copy files or directories. Example: `cp file1 file2`, `cp -r dir1 dir2`. Options: `-i` confirm overwrite, `-r` recursive, `-v` verbose.",
    shortDef: "Copy files/directories.",
    flashcard: true,
    questions: [
      {
        type: "mcq",
        question: "Which option makes `cp` copy directories recursively?",
        options: ["-d", "-i", "-r"],
        answer: "-r"
      }
    ]
  },
  {
    cmd: "mv",
    category: "file",
    def: "Move or rename files. Example: `mv file1 newname.txt`, `mv file1 /tmp/`. Options: `-i` confirm overwrite, `-v` verbose.",
    shortDef: "Move or rename files.",
    flashcard: true,
    questions: [
      {
        type: "text",
        question: "What command renames 'old.txt' to 'new.txt'?",
        answer: "mv old.txt new.txt"
      }
    ]
  },
  {
    cmd: "cat",
    category: "file",
    def: "Concatenate and display file content. Example: `cat file.txt`. Use with `>` or `>>` for redirection.",
    shortDef: "Display file contents.",
    flashcard: true,
    questions: [
      {
        type: "text",
        question: "What command displays the contents of 'notes.txt'?",
        answer: "cat notes.txt"
      }
    ]
  },
  {
    cmd: "less",
    category: "file",
    def: "View file content one screen at a time, with navigation. Example: `less file.txt`.",
    shortDef: "View file with navigation.",
    flashcard: true,
    questions: [
      {
        type: "mcq",
        question: "Which key quits the `less` pager?",
        options: ["q", "Ctrl+C", "Esc"],
        answer: "q"
      }
    ]
  },
  {
    cmd: "head",
    category: "file",
    def: "Show the first 10 lines of a file by default. Example: `head file.txt`. Use `-n` to specify line count.",
    shortDef: "Show first lines of a file.",
    flashcard: true,
    questions: [
      {
        type: "mcq",
        question: "Which `head` option shows the first 20 lines of a file?",
        options: ["-c 20", "-n 20", "-l 20"],
        answer: "-n 20"
      }
    ]
  },
  {
    cmd: "tail",
    category: "file",
    def: "Show the last 10 lines of a file by default. Example: `tail file.txt`. Use `-f` to follow updates in real time.",
    shortDef: "Show last lines of a file.",
    flashcard: true,
    questions: [
      {
        type: "mcq",
        question: "Which `tail` option lets you monitor a log file as it grows?",
        options: ["-f", "-n", "-c"],
        answer: "-f"
      }
    ]
  },
  /* ===========================
    PROCESS MANAGEMENT
  ============================ */
  {
    cmd: "ps",
    category: "process",
    def: "Show running processes. Common options: `aux` (all, user, extended), `-ef` (full format).",
    shortDef: "Show running processes.",
    flashcard: true,
    questions: [
      {
        type: "mcq",
        question: "Which `ps` option shows all processes with detailed information?",
        options: ["aux", "-e", "-f"],
        answer: "aux"
      },
      {
        type: "text",
        question: "What command shows processes in full format (like PID, PPID, CMD)?",
        answer: "ps -ef"
      }
    ]
  },
  {
    cmd: "top",
    category: "process",
    def: "Interactive real-time process viewer. Press `q` to quit, `k` to kill a process by PID.",
    shortDef: "Realtime process viewer.",
    flashcard: true,
    questions: [
      {
        type: "text",
        question: "Which command provides an interactive, updating view of processes?",
        answer: "top"
      }
    ]
  },
  {
    cmd: "htop",
    category: "process",
    def: "Improved version of `top` with colors, scrolling, and easier navigation.",
    shortDef: "Improved top.",
    flashcard: true,
    questions: []
  },
  {
    cmd: "kill",
    category: "process",
    def: "Send signals to processes by PID. Examples: `kill -9 PID` (SIGKILL), `kill -15 PID` (SIGTERM).",
    shortDef: "Terminate processes by PID.",
    flashcard: true,
    questions: [
      {
        type: "mcq",
        question: "Which `kill` signal requests graceful termination?",
        options: ["-9", "-1", "-15"],
        answer: "-15"
      },
      {
        type: "mcq",
        question: "Which `kill` option forces immediate termination?",
        options: ["-9", "-15", "-1"],
        answer: "-9"
      }
    ]
  },
  {
    cmd: "free",
    category: "process",
    def: "Display memory usage. Example: `free -h` for human-readable format.",
    shortDef: "Show memory usage.",
    flashcard: true,
    questions: [
      {
        type: "text",
        question: "Which command shows free and used memory in human-readable format?",
        answer: "free -h"
      }
    ]
  },
  {
    cmd: "uptime",
    category: "process",
    def: "Show how long the system has been running and the system load averages.",
    shortDef: "System uptime and load.",
    flashcard: true,
    questions: [
      {
        type: "text",
        question: "What command shows how long the system has been running?",
        answer: "uptime"
      }
    ]
  },
  {
    cmd: "dmesg",
    category: "process",
    def: "Print kernel ring buffer messages, including boot and hardware info.",
    shortDef: "Kernel boot/hardware messages.",
    flashcard: true,
    questions: [
      {
        type: "mcq",
        question: "Which command prints kernel boot messages?",
        options: ["journalctl", "syslog", "dmesg"],
        answer: "dmesg"
      }
    ]
  },
  {
    cmd: "journalctl",
    category: "process",
    def: "Query and display logs from systemd's journal. Example: `journalctl -xe` shows errors.",
    shortDef: "View systemd logs.",
    flashcard: true,
    questions: [
      {
        type: "text",
        question: "What command displays logs from the systemd journal?",
        answer: "journalctl"
      }
    ]
  },
  {
    cmd: "lsblk",
    category: "process",
    def: "List block devices. Example: `lsblk -f` shows filesystem info.",
    shortDef: "List block devices.",
    flashcard: true,
    questions: [
      {
        type: "mcq",
        question: "Which command lists all block devices and their mount points?",
        options: ["lsblk", "df", "du"],
        answer: "lsblk"
      }
    ]
  },
  {
    cmd: "uname",
    category: "process",
    def: "Display system/kernel info. Options: `-r` kernel release, `-a` all info.",
    shortDef: "Show system/kernel info.",
    flashcard: true,
    questions: [
      {
        type: "mcq",
        question: "Which `uname` option prints kernel release only?",
        options: ["-r", "-v", "-s"],
        answer: "-r"
      }
    ]
  },
  {
    cmd: "lscpu",
    category: "process",
    def: "Display CPU architecture details (cores, threads, model, speed).",
    shortDef: "CPU architecture info.",
    flashcard: true,
    questions: []
  },
  {
    cmd: "/proc",
    category: "process",
    def: "Virtual filesystem exposing kernel and process info. Example: `/proc/cpuinfo`, `/proc/meminfo`.",
    shortDef: "Kernel/process info in /proc.",
    flashcard: true,
    questions: [
      {
        type: "text",
        question: "Where can you find CPU information in the virtual filesystem?",
        answer: "/proc/cpuinfo"
      }
    ]
  },
  /* ===========================
    PACKAGE MANAGEMENT
  ============================ */
  {
    cmd: "dpkg",
    category: "package",
    def: "Debian package manager (low-level). Example: `dpkg -i package.deb` installs a .deb file. Options: `-l` list, `-r` remove, `-L` list files inside package.",
    shortDef: "Debian package manager.",
    flashcard: true,
    questions: [
      {
        type: "mcq",
        question: "Which command installs a .deb package directly?",
        options: ["dpkg -i file.deb", "apt-get install file.deb", "rpm -i file.deb"],
        answer: "dpkg -i file.deb"
      },
      {
        type: "text",
        question: "What command lists all installed packages with dpkg?",
        answer: "dpkg -l"
      }
    ]
  },
  {
    cmd: "apt-get",
    category: "package",
    def: "APT front-end for package management on Debian/Ubuntu. Example: `apt-get install nginx`. Options: `update` refresh repos, `upgrade` upgrade all packages, `remove` uninstall.",
    shortDef: "APT package manager.",
    flashcard: true,
    questions: [
      {
        type: "mcq",
        question: "Which command updates the package index before installing?",
        options: ["apt-get update", "apt-get upgrade", "apt-get clean"],
        answer: "apt-get update"
      },
      {
        type: "text",
        question: "What command upgrades all upgradable packages?",
        answer: "apt-get upgrade"
      }
    ]
  },
  {
    cmd: "rpm",
    category: "package",
    def: "Red Hat Package Manager (low-level). Example: `rpm -ivh package.rpm` installs a package. Options: `-q` query, `-e` erase, `-qa` list all.",
    shortDef: "RPM package manager.",
    flashcard: true,
    questions: [
      {
        type: "mcq",
        question: "Which `rpm` option lists all installed packages?",
        options: ["-qa", "-q", "-e"],
        answer: "-qa"
      },
      {
        type: "text",
        question: "What rpm command uninstalls a package named httpd?",
        answer: "rpm -e httpd"
      }
    ]
  },
  {
    cmd: "yum",
    category: "package",
    def: "Yellowdog Updater, Modified. High-level package manager for RPM-based systems. Example: `yum install httpd`. Options: `search`, `update`, `remove`.",
    shortDef: "Package manager (RPM systems).",
    flashcard: true,
    questions: [
      {
        type: "text",
        question: "What yum command installs the Apache web server?",
        answer: "yum install httpd"
      },
      {
        type: "mcq",
        question: "Which yum subcommand searches for a package?",
        options: ["yum search", "yum find", "yum query"],
        answer: "yum search"
      }
    ]
  },
  {
    cmd: "dnf",
    category: "package",
    def: "Modern replacement for yum (Fedora, RHEL8+). Example: `dnf install nginx`. Options: `search`, `update`, `remove`, `list installed`.",
    shortDef: "New RPM-based package manager.",
    flashcard: true,
    questions: [
      {
        type: "text",
        question: "Which dnf command removes a package?",
        answer: "dnf remove package"
      },
      {
        type: "mcq",
        question: "Which tool replaced yum on modern Fedora/RHEL?",
        options: ["apt-get", "dnf", "rpm"],
        answer: "dnf"
      }
    ]
  },
  {
    cmd: "zypper",
    category: "package",
    def: "Package manager for openSUSE. Example: `zypper install vim`. Options: `search` find packages, `update` upgrade system, `remove` uninstall.",
    shortDef: "openSUSE package manager.",
    flashcard: true,
    questions: [
      {
        type: "mcq",
        question: "Which Linux distribution uses `zypper` as its package manager?",
        options: ["Ubuntu", "openSUSE", "Fedora"],
        answer: "openSUSE"
      },
      {
        type: "text",
        question: "What zypper command installs the package 'vim'?",
        answer: "zypper install vim"
      }
    ]
  },
  {
    cmd: "repositories",
    category: "package",
    def: "Software repositories store packages for installation. Commands like `apt-get update` or `zypper refresh` sync your local cache with the repo.",
    shortDef: "Central storage for packages.",
    flashcard: true,
    questions: [
      {
        type: "mcq",
        question: "What does `apt-get update` do?",
        options: ["Upgrades packages", "Refreshes repo index", "Cleans cache"],
        answer: "Refreshes repo index"
      }
    ]
  },
  {
    cmd: "dependencies",
    category: "package",
    def: "Most packages rely on other packages (dependencies). High-level tools (apt, yum, dnf, zypper) resolve these automatically.",
    shortDef: "Packages needed by other packages.",
    flashcard: true,
    questions: [
      {
        type: "text",
        question: "Which tool automatically handles dependencies: dpkg or apt-get?",
        answer: "apt-get"
      }
    ]
  },
  /* ===========================
    USER & GROUP MANAGEMENT
  ============================ */
  {
    cmd: "useradd",
    category: "user",
    def: "Create a new user account. Example: `useradd john`. Options: `-m` create home directory, `-s` set shell.",
    shortDef: "Add new user.",
    flashcard: true,
    questions: [
      {
        type: "mcq",
        question: "Which `useradd` option creates the user’s home directory?",
        options: ["-s", "-m", "-d"],
        answer: "-m"
      }
    ]
  },
  {
    cmd: "usermod",
    category: "user",
    def: "Modify an existing user account. Example: `usermod -aG sudo john` adds user to group.",
    shortDef: "Modify user account.",
    flashcard: true,
    questions: [
      {
        type: "text",
        question: "What command adds 'john' to the 'sudo' group?",
        answer: "usermod -aG sudo john"
      }
    ]
  },
  {
    cmd: "userdel",
    category: "user",
    def: "Delete a user account. Example: `userdel -r john` removes user and home directory.",
    shortDef: "Delete user account.",
    flashcard: true,
    questions: [
      {
        type: "mcq",
        question: "Which option makes `userdel` also remove the user’s home directory?",
        options: ["-d", "-r", "-h"],
        answer: "-r"
      }
    ]
  },
  {
    cmd: "passwd",
    category: "user",
    def: "Change user password. Example: `passwd john`. Run without args to change your own.",
    shortDef: "Change user password.",
    flashcard: true,
    questions: [
      {
        type: "text",
        question: "What command changes your own password?",
        answer: "passwd"
      }
    ]
  },
  {
    cmd: "groupadd",
    category: "group",
    def: "Create a new group. Example: `groupadd developers`.",
    shortDef: "Add group.",
    flashcard: true,
    questions: []
  },
  {
    cmd: "groupdel",
    category: "group",
    def: "Delete a group. Example: `groupdel developers`.",
    shortDef: "Delete group.",
    flashcard: true,
    questions: []
  },
  {
    cmd: "groups",
    category: "group",
    def: "Show groups the current user belongs to.",
    shortDef: "Show user’s groups.",
    flashcard: true,
    questions: [
      {
        type: "text",
        question: "Which command shows the groups of the current user?",
        answer: "groups"
      }
    ]
  },
  {
    cmd: "id",
    category: "user",
    def: "Display user ID (UID), group ID (GID), and group memberships.",
    shortDef: "Show UID, GID, groups.",
    flashcard: true,
    questions: [
      {
        type: "mcq",
        question: "Which command shows UID, GID, and groups?",
        options: ["id", "whoami", "groups"],
        answer: "id"
      }
    ]
  },
  {
    cmd: "su",
    category: "user",
    def: "Switch user account. Example: `su - john` switches to john with login shell. `su` alone switches to root if permitted.",
    shortDef: "Switch user.",
    flashcard: true,
    questions: [
      {
        type: "text",
        question: "What command switches to the root account?",
        answer: "su"
      }
    ]
  },
  {
    cmd: "sudo",
    category: "user",
    def: "Run commands with root privileges if permitted in /etc/sudoers. Example: `sudo apt update`.",
    shortDef: "Run command as root.",
    flashcard: true,
    questions: [
      {
        type: "mcq",
        question: "Which file defines who can run commands with sudo?",
        options: ["/etc/passwd", "/etc/sudoers", "/etc/shadow"],
        answer: "/etc/sudoers"
      }
    ]
  },
  /* ===========================
    USER & GROUP SYSTEM FILES
  ============================ */
  {
    cmd: "/etc/passwd",
    category: "user",
    def: "Text file containing user account info. Fields: username, password placeholder (x), UID, GID, GECOS, home directory, shell.",
    shortDef: "User account database.",
    flashcard: true,
    questions: [
      {
        type: "mcq",
        question: "Which file stores usernames, UID, GID, home dir, and shell?",
        options: ["/etc/passwd", "/etc/shadow", "/etc/group"],
        answer: "/etc/passwd"
      },
      {
        type: "text",
        question: "What command can you run to view /etc/passwd entries?",
        answer: "cat /etc/passwd"
      }
    ]
  },
  {
    cmd: "/etc/shadow",
    category: "user",
    def: "File storing encrypted passwords and aging information. Only root can read it. Fields: username, password hash, last change, min/max age.",
    shortDef: "Encrypted passwords + aging.",
    flashcard: true,
    questions: [
      {
        type: "mcq",
        question: "Which file contains encrypted user passwords?",
        options: ["/etc/passwd", "/etc/shadow", "/etc/sudoers"],
        answer: "/etc/shadow"
      }
    ]
  },
  {
    cmd: "/etc/group",
    category: "group",
    def: "File storing groups and memberships. Fields: group name, password placeholder, GID, members.",
    shortDef: "Group database.",
    flashcard: true,
    questions: [
      {
        type: "text",
        question: "Which file defines groups and their members?",
        answer: "/etc/group"
      }
    ]
  },
  /* ===========================
    FILE PERMISSIONS
  ============================ */
  {
    cmd: "ls -l",
    category: "permissions",
    def: "List files with detailed info including permissions, owner, group, size, and modification time. Example: `ls -l /etc`.",
    shortDef: "Show permissions with file list.",
    flashcard: true,
    questions: [
      {
        type: "mcq",
        question: "In `ls -l`, what does the first character of the permissions string indicate?",
        options: ["File type", "Owner", "Group", "Executable flag"],
        answer: "File type"
      }
    ]
  },
  {
    cmd: "chmod",
    category: "permissions",
    def: "Change file permissions. Example: `chmod 755 file` (rwx for owner, rx for group/others). Supports symbolic (`u+x`) and numeric modes.",
    shortDef: "Change permissions.",
    flashcard: true,
    questions: [
      {
        type: "mcq",
        question: "Which command makes a script executable for the owner only?",
        options: ["chmod u+x script.sh", "chmod g+x script.sh", "chmod o+x script.sh"],
        answer: "chmod u+x script.sh"
      },
      {
        type: "text",
        question: "What numeric mode gives rw-r--r-- permissions?",
        answer: "644"
      }
    ]
  },
  {
    cmd: "chown",
    category: "permissions",
    def: "Change file ownership. Example: `chown user:group file`. Root privileges required.",
    shortDef: "Change owner/group.",
    flashcard: true,
    questions: [
      {
        type: "mcq",
        question: "Which command changes ownership of file.txt to user bob and group devs?",
        options: [
          "chown bob file.txt",
          "chown bob:devs file.txt",
          "chmod bob:devs file.txt"
        ],
        answer: "chown bob:devs file.txt"
      }
    ]
  },
  {
    cmd: "umask",
    category: "permissions",
    def: "Sets default permissions for new files/directories. Example: `umask 022` → new files 644, dirs 755.",
    shortDef: "Set default permissions.",
    flashcard: true,
    questions: [
      {
        type: "text",
        question: "What umask value results in default file perms of 644?",
        answer: "022"
      }
    ]
  },
 /* ===========================
    SPECIAL PERMISSIONS
  ============================ */
  {
    cmd: "setuid",
    category: "permissions",
    def: "Special permission where an executable runs with the permissions of the file’s owner. Example: `/usr/bin/passwd` is setuid root so normal users can change their passwords.",
    shortDef: "Execute with owner's privileges.",
    flashcard: true,
    questions: [
      {
        type: "mcq",
        question: "What does the setuid permission allow?",
        options: [
          "Executable runs with the file owner's privileges",
          "Executable runs faster",
          "Executable is hidden from other users"
        ],
        answer: "Executable runs with the file owner's privileges"
      },
      {
        type: "text",
        question: "In `ls -l`, what indicates the setuid bit?",
        answer: "s in the owner’s execute position"
      },
      {
        type: "text",
        question: "Which common Linux command is setuid root so users can change their passwords?",
        answer: "/usr/bin/passwd"
      }
    ]
  },
  {
    cmd: "setgid",
    category: "permissions",
    def: "Special permission that applies to executables or directories. On executables, process runs with group’s privileges. On directories, new files inherit the directory’s group.",
    shortDef: "Run as group / inherit group.",
    flashcard: true,
    questions: [
      {
        type: "mcq",
        question: "What does the setgid bit do when applied to a directory?",
        options: [
          "All files created inherit the directory’s group",
          "All files created inherit the directory’s owner",
          "All files created become executable"
        ],
        answer: "All files created inherit the directory’s group"
      },
      {
        type: "text",
        question: "In `ls -l`, what indicates the setgid bit?",
        answer: "s in the group’s execute position"
      },
      {
        type: "text",
        question: "Why would you setgid on a shared project directory?",
        answer: "So all files inherit the group for collaboration"
      }
    ]
  },
  {
    cmd: "sticky bit",
    category: "permissions",
    def: "Special permission usually on world-writable directories (like /tmp). Only the file’s owner or root can delete or rename files inside. Prevents users from deleting each other’s files.",
    shortDef: "Only owners delete their files.",
    flashcard: true,
    questions: [
      {
        type: "mcq",
        question: "What does the sticky bit do in a directory?",
        options: [
          "Only the file’s owner/root can delete files",
          "Makes all files executable",
          "Prevents files from being modified"
        ],
        answer: "Only the file’s owner/root can delete files"
      },
      {
        type: "text",
        question: "In `ls -l`, what indicates the sticky bit?",
        answer: "t in the others’ execute position"
      },
      {
        type: "text",
        question: "Which directory on Linux normally has the sticky bit set?",
        answer: "/tmp"
      }
    ]
  },
  /* ===========================
    NETWORKING
  ============================ */
  {
    cmd: "ping",
    category: "networking",
    def: "Send ICMP echo requests to test connectivity. Example: `ping -c 4 google.com` sends 4 packets.",
    shortDef: "Test connectivity with ICMP.",
    flashcard: true,
    questions: [
      {
        type: "mcq",
        question: "Which `ping` option limits the number of packets sent?",
        options: ["-n", "-c", "-t"],
        answer: "-c"
      },
      {
        type: "text",
        question: "What command sends 4 ICMP packets to example.com?",
        answer: "ping -c 4 example.com"
      }
    ]
  },
  {
    cmd: "ping6",
    category: "networking",
    def: "Send ICMPv6 echo requests (IPv6 version of ping). Example: `ping6 -c 3 ipv6.google.com`.",
    shortDef: "Test IPv6 connectivity.",
    flashcard: true,
    questions: [
      {
        type: "mcq",
        question: "Which command is used for testing IPv6 connectivity?",
        options: ["ping", "ping6", "traceroute6"],
        answer: "ping6"
      }
    ]
  },
  {
    cmd: "ifconfig",
    category: "networking",
    def: "Legacy tool to display/configure network interfaces. Example: `ifconfig eth0 up` enables eth0.",
    shortDef: "Legacy network config tool.",
    flashcard: true,
    questions: [
      {
        type: "mcq",
        question: "Which command with `ifconfig` enables the interface eth0?",
        options: ["ifconfig eth0 start", "ifconfig eth0 up", "ifconfig eth0 enable"],
        answer: "ifconfig eth0 up"
      }
    ]
  },
  {
    cmd: "ip",
    category: "networking",
    def: "Modern tool to manage IP addresses, routes, and interfaces. Example: `ip addr show` lists addresses.",
    shortDef: "Manage IP, routes, interfaces.",
    flashcard: true,
    questions: [
      {
        type: "mcq",
        question: "Which `ip` subcommand lists all IP addresses?",
        options: ["ip show", "ip addr show", "ip route show"],
        answer: "ip addr show"
      },
      {
        type: "text",
        question: "What command shows routing table using ip?",
        answer: "ip route show"
      }
    ]
  },
  {
    cmd: "route",
    category: "networking",
    def: "Old tool to show or manipulate routing table. Example: `route -n` shows routes in numeric form.",
    shortDef: "Legacy routing table tool.",
    flashcard: true,
    questions: [
      {
        type: "text",
        question: "What modern command replaces `route`?",
        answer: "ip route"
      }
    ]
  },
  {
    cmd: "netstat",
    category: "networking",
    def: "Legacy tool to display network connections, routing, and sockets. Example: `netstat -tuln` shows listening ports.",
    shortDef: "Show network connections (legacy).",
    flashcard: true,
    questions: [
      {
        type: "mcq",
        question: "Which `netstat` option shows listening TCP/UDP ports?",
        options: ["-r", "-a", "-tuln"],
        answer: "-tuln"
      }
    ]
  },
  {
    cmd: "ss",
    category: "networking",
    def: "Modern replacement for netstat. Example: `ss -tuln` shows listening sockets.",
    shortDef: "Socket statistics (modern).",
    flashcard: true,
    questions: [
      {
        type: "text",
        question: "What command shows listening sockets using ss?",
        answer: "ss -tuln"
      }
    ]
  },
  {
    cmd: "dig",
    category: "networking",
    def: "DNS lookup tool. Example: `dig example.com` queries A record.",
    shortDef: "DNS lookup utility.",
    flashcard: true,
    questions: [
      {
        type: "mcq",
        question: "Which `dig` option returns only the short answer (IP address)?",
        options: ["+short", "-s", "-a"],
        answer: "+short"
      }
    ]
  },
  {
    cmd: "host",
    category: "networking",
    def: "Simple DNS lookup utility. Example: `host example.com`.",
    shortDef: "Basic DNS lookup tool.",
    flashcard: true,
    questions: [
      {
        type: "text",
        question: "What command uses a simpler interface than dig for DNS lookups?",
        answer: "host"
      }
    ]
  },
  {
    cmd: "ssh",
    category: "networking",
    def: "Secure remote login via SSH. Example: `ssh user@host`.",
    shortDef: "Secure shell remote login.",
    flashcard: true,
    questions: [
      {
        type: "mcq",
        question: "Which command connects to server.com as user bob via SSH?",
        options: ["ssh bob server.com", "ssh bob@server.com", "ssh server.com bob"],
        answer: "ssh bob@server.com"
      }
    ]
  },
  {
    cmd: "scp",
    category: "networking",
    def: "Copy files over SSH. Example: `scp file.txt user@host:/path/`.",
    shortDef: "Secure copy over SSH.",
    flashcard: true,
    questions: [
      {
        type: "text",
        question: "What command securely copies local.txt to remote:/home/bob?",
        answer: "scp local.txt bob@remote:/home/bob"
      }
    ]
  },
    /* ===========================
    SYSTEM INFORMATION & MONITORING
  ============================ */
  {
    cmd: "uname",
    category: "system",
    def: "Print system information. Common switches: `-r` (kernel release), `-v` (kernel version), `-n` (nodename/hostname), `-m` (machine hardware), `-a` (all).",
    shortDef: "Show system/kernel info.",
    flashcard: true,
    questions: [
      {
        type: "mcq",
        question: "Which `uname` option shows the kernel release?",
        options: ["-a", "-r", "-n"],
        answer: "-r"
      },
      {
        type: "mcq",
        question: "Which `uname` option shows all available system information?",
        options: ["-a", "-m", "-v"],
        answer: "-a"
      },
      {
        type: "text",
        question: "What `uname` option shows the machine hardware name?",
        answer: "-m"
      }
    ]
  },
  {
    cmd: "lscpu",
    category: "system",
    def: "Display CPU architecture information, cores, threads, sockets, and vendor. Examples: `lscpu | grep 'Model name'`, `lscpu | grep CPU(s)`. No major switches (output is structured).",
    shortDef: "Show CPU info.",
    flashcard: true,
    questions: [
      {
        type: "text",
        question: "What command lists CPU model and number of cores?",
        answer: "lscpu"
      }
    ]
  },
  {
    cmd: "lsblk",
    category: "system",
    def: "List block devices (disks, partitions). Useful switches: `-f` (filesystem info), `-o` (custom columns, e.g., NAME,FSTYPE,SIZE,MOUNTPOINT).",
    shortDef: "List block devices.",
    flashcard: true,
    questions: [
      {
        type: "mcq",
        question: "Which `lsblk` option shows filesystem type and labels?",
        options: ["-o", "-f", "-a"],
        answer: "-f"
      }
    ]
  },
  {
    cmd: "/proc",
    category: "system",
    def: "Pseudo-filesystem with system/kernel info. Common files: `/proc/cpuinfo` (CPU details), `/proc/meminfo` (RAM), `/proc/uptime` (uptime), `/proc/partitions` (disk info).",
    shortDef: "Kernel/system info files.",
    flashcard: true,
    questions: [
      {
        type: "text",
        question: "Which file in /proc shows memory details?",
        answer: "/proc/meminfo"
      },
      {
        type: "text",
        question: "Which file in /proc shows CPU details?",
        answer: "/proc/cpuinfo"
      }
    ]
  },
  {
    cmd: "uptime",
    category: "system",
    def: "Shows system running time, users logged in, and load averages. Example: `uptime -p` (pretty format), `uptime -s` (since when running).",
    shortDef: "Show uptime and load.",
    flashcard: true,
    questions: [
      {
        type: "mcq",
        question: "Which `uptime` option shows a human-readable format (e.g., 'up 5 hours, 10 minutes')?",
        options: ["-p", "-s", "-h"],
        answer: "-p"
      },
      {
        type: "text",
        question: "Which `uptime` option shows the system boot time?",
        answer: "-s"
      }
    ]
  },
  {
    cmd: "dmesg",
    category: "system",
    def: "Print kernel ring buffer messages (boot + hardware). Common usage: `dmesg | less`, `dmesg | grep usb`, `dmesg -T` (human-readable timestamps).",
    shortDef: "Kernel boot/hardware logs.",
    flashcard: true,
    questions: [
      {
        type: "mcq",
        question: "Which command shows kernel messages with readable timestamps?",
        options: ["dmesg -T", "dmesg -r", "dmesg -t"],
        answer: "dmesg -T"
      }
    ]
  },
  {
    cmd: "journalctl",
    category: "system",
    def: "Query/view `systemd` logs. Common switches: `-b` (current boot), `-u <service>` (service logs), `-f` (follow live logs), `--since`/`--until` (time filtering).",
    shortDef: "View systemd logs.",
    flashcard: true,
    questions: [
      {
        type: "text",
        question: "Which `journalctl` option shows logs only from the current boot?",
        answer: "-b"
      },
      {
        type: "text",
        question: "What `journalctl` option shows logs in real time (like `tail -f`)?",
        answer: "-f"
      },
      {
        type: "mcq",
        question: "Which option shows logs from a specific service, like SSH?",
        options: ["-b", "-u ssh", "-s"],
        answer: "-u ssh"
      }
    ]
  },
  {
    cmd: "syslog",
    category: "system",
    def: "Traditional system log file. On Debian/Ubuntu: `/var/log/syslog`. On RedHat/Fedora: `/var/log/messages`. Viewed with `less`, `tail -f`. Superseded by `journalctl` on systemd systems.",
    shortDef: "System log file.",
    flashcard: true,
    questions: [
      {
        type: "text",
        question: "On Ubuntu, where is the main system log file located?",
        answer: "/var/log/syslog"
      }
    ]
  },
  {
    cmd: "free",
    category: "system",
    def: "Show memory usage. Useful switches: `-h` (human-readable), `-m` (MB), `-g` (GB), `-t` (totals). Example: `free -h`.",
    shortDef: "Show memory usage.",
    flashcard: true,
    questions: [
      {
        type: "mcq",
        question: "Which `free` option shows memory in human-readable format?",
        options: ["-m", "-g", "-h"],
        answer: "-h"
      },
      {
        type: "text",
        question: "Which `free` option displays totals?",
        answer: "-t"
      }
    ]
  },
    /* ===========================
    ARCHIVING & COMPRESSION
  ============================ */
  {
    cmd: "tar",
    category: "archive",
    def: "Archive multiple files into a single tarball. Common options: `-c` (create), `-x` (extract), `-t` (list), `-v` (verbose), `-f` (file). Compressions: `-z` (gzip), `-j` (bzip2), `-J` (xz). Example: `tar -czvf archive.tar.gz dir/`.",
    shortDef: "Create/extract archives.",
    flashcard: true,
    questions: [
      {
        type: "mcq",
        question: "Which `tar` option is used to extract files from an archive?",
        options: ["-c", "-x", "-t"],
        answer: "-x"
      },
      {
        type: "mcq",
        question: "Which `tar` option enables gzip compression?",
        options: ["-z", "-j", "-J"],
        answer: "-z"
      },
      {
        type: "text",
        question: "What command extracts files from `backup.tar.gz`?",
        answer: "tar -xzvf backup.tar.gz"
      }
    ]
  },
  {
    cmd: "gzip",
    category: "archive",
    def: "Compress files using gzip format (.gz). Common: `gzip file` → `file.gz`. Decompress: `gunzip file.gz` or `gzip -d file.gz`.",
    shortDef: "Compress with gzip.",
    flashcard: true,
    questions: [
      {
        type: "text",
        question: "Which command decompresses a `.gz` file?",
        answer: "gunzip file.gz"
      }
    ]
  },
  {
    cmd: "gunzip",
    category: "archive",
    def: "Decompress `.gz` files (reverse of gzip). Example: `gunzip archive.gz`.",
    shortDef: "Decompress gzip files.",
    flashcard: true,
    questions: []
  },
  {
    cmd: "bzip2",
    category: "archive",
    def: "Compress files using bzip2 format (.bz2). Generally smaller but slower than gzip. Example: `bzip2 file` → `file.bz2`.",
    shortDef: "Compress with bzip2.",
    flashcard: true,
    questions: [
      {
        type: "text",
        question: "What command decompresses `archive.bz2`?",
        answer: "bunzip2 archive.bz2"
      }
    ]
  },
  {
    cmd: "bunzip2",
    category: "archive",
    def: "Decompress `.bz2` files. Example: `bunzip2 archive.bz2`.",
    shortDef: "Decompress bzip2 files.",
    flashcard: true,
    questions: []
  },
  {
    cmd: "bzcat",
    category: "archive",
    def: "View contents of `.bz2` files without decompressing. Example: `bzcat file.bz2`.",
    shortDef: "View bzip2 file contents.",
    flashcard: true,
    questions: [
      {
        type: "text",
        question: "What command displays contents of a compressed `.bz2` file without extraction?",
        answer: "bzcat file.bz2"
      }
    ]
  },
  {
    cmd: "xz",
    category: "archive",
    def: "Compress files using `.xz` format (high compression). Example: `xz file` → `file.xz`. Decompress with `unxz file.xz`.",
    shortDef: "Compress with xz.",
    flashcard: true,
    questions: [
      {
        type: "text",
        question: "What command decompresses a `.xz` file?",
        answer: "unxz file.xz"
      }
    ]
  },
  {
    cmd: "unxz",
    category: "archive",
    def: "Decompress `.xz` files. Example: `unxz archive.xz`.",
    shortDef: "Decompress xz files.",
    flashcard: true,
    questions: []
  },
  {
    cmd: "xzcat",
    category: "archive",
    def: "View contents of `.xz` compressed files without decompressing. Example: `xzcat file.xz`.",
    shortDef: "View xz file contents.",
    flashcard: true,
    questions: []
  },
  {
    cmd: "zip",
    category: "archive",
    def: "Create compressed `.zip` archives. Example: `zip archive.zip file1 file2`. Options: `-r` (recursive), `-e` (encrypt).",
    shortDef: "Create zip archives.",
    flashcard: true,
    questions: [
      {
        type: "mcq",
        question: "Which `zip` option includes subdirectories?",
        options: ["-r", "-e", "-v"],
        answer: "-r"
      }
    ]
  },
  {
    cmd: "unzip",
    category: "archive",
    def: "Extract files from `.zip` archives. Example: `unzip archive.zip`. Options: `-l` (list contents), `-d` (specify directory).",
    shortDef: "Extract zip archives.",
    flashcard: true,
    questions: [
      {
        type: "text",
        question: "What command lists contents of a `.zip` file without extracting?",
        answer: "unzip -l archive.zip"
      }
    ]
  },
    /* ===========================
    TEXT PROCESSING & FILTERS
  ============================ */
  {
    cmd: "cat",
    category: "text",
    def: "Concatenate and display file contents. Example: `cat file.txt`. Can also combine multiple files: `cat f1 f2 > combined`. Often piped into other commands.",
    shortDef: "Display or combine files.",
    flashcard: true,
    questions: [
      {
        type: "text",
        question: "What command displays the contents of file.txt?",
        answer: "cat file.txt"
      }
    ]
  },
  {
    cmd: "less",
    category: "text",
    def: "View file contents one page at a time. Navigate with space (down), b (up), q (quit).",
    shortDef: "Paginate file viewer.",
    flashcard: true,
    questions: [
      {
        type: "text",
        question: "Which key quits the `less` viewer?",
        answer: "q"
      }
    ]
  },
  {
    cmd: "more",
    category: "text",
    def: "Basic pager to view file output one screen at a time. Press space to scroll, q to quit. Simpler than less.",
    shortDef: "Basic pager.",
    flashcard: true,
    questions: []
  },
  {
    cmd: "head",
    category: "text",
    def: "Show the first 10 lines of a file by default. Example: `head -n 20 file.txt` for first 20 lines.",
    shortDef: "Show first lines of file.",
    flashcard: true,
    questions: [
      {
        type: "mcq",
        question: "Which `head` option specifies how many lines to display?",
        options: ["-l", "-n", "-c"],
        answer: "-n"
      }
    ]
  },
  {
    cmd: "tail",
    category: "text",
    def: "Show the last 10 lines of a file by default. Example: `tail -n 50 file.txt`. Use `-f` to follow log files in real time.",
    shortDef: "Show last lines of file.",
    flashcard: true,
    questions: [
      {
        type: "mcq",
        question: "Which `tail` option allows continuous monitoring of a file (like logs)?",
        options: ["-f", "-c", "-n"],
        answer: "-f"
      }
    ]
  },
  {
    cmd: "grep",
    category: "text",
    def: "Search for patterns in text. Example: `grep error file.log`. Options: `-i` (ignore case), `-r` (recursive), `-n` (line numbers).",
    shortDef: "Search text with patterns.",
    flashcard: true,
    questions: [
      {
        type: "text",
        question: "Which grep option ignores case while searching?",
        answer: "-i"
      },
      {
        type: "text",
        question: "What command searches for 'fail' in all files under /var/log recursively?",
        answer: "grep -r fail /var/log"
      }
    ]
  },
  {
    cmd: "sort",
    category: "text",
    def: "Sort lines of text. Options: `-n` (numeric), `-r` (reverse), `-u` (unique). Example: `sort -nr file.txt`.",
    shortDef: "Sort lines of text.",
    flashcard: true,
    questions: [
      {
        type: "mcq",
        question: "Which `sort` option ensures unique output lines?",
        options: ["-u", "-n", "-r"],
        answer: "-u"
      }
    ]
  },
  {
    cmd: "cut",
    category: "text",
    def: "Extract sections from each line. Options: `-d` (delimiter), `-f` (field), `-c` (character position). Example: `cut -d: -f1 /etc/passwd`.",
    shortDef: "Extract fields or characters.",
    flashcard: true,
    questions: [
      {
        type: "text",
        question: "What command prints only usernames from /etc/passwd?",
        answer: "cut -d: -f1 /etc/passwd"
      }
    ]
  },
  {
    cmd: "wc",
    category: "text",
    def: "Word/line/character count. Example: `wc -l file.txt` counts lines, `wc -w file.txt` counts words.",
    shortDef: "Count lines, words, chars.",
    flashcard: true,
    questions: [
      {
        type: "mcq",
        question: "Which `wc` option counts the number of lines in a file?",
        options: ["-w", "-l", "-c"],
        answer: "-l"
      }
    ]
  },
  {
    cmd: "tr",
    category: "text",
    def: "Translate or delete characters. Example: `tr 'a-z' 'A-Z'` converts lowercase to uppercase, `tr -d '0-9'` removes digits.",
    shortDef: "Translate/delete characters.",
    flashcard: true,
    questions: [
      {
        type: "text",
        question: "What command converts lowercase to uppercase using tr?",
        answer: "tr 'a-z' 'A-Z'"
      }
    ]
  },
  /* ===========================
    BOOT & SERVICES
  ============================ */
  {
    cmd: "grub",
    category: "boot",
    def: "GRUB (GRand Unified Bootloader) loads the Linux kernel at startup. Config file is usually `/boot/grub/grub.cfg` or `/etc/default/grub`. Supports selecting kernels and recovery mode.",
    shortDef: "Bootloader for Linux.",
    flashcard: true,
    questions: [
      {
        type: "mcq",
        question: "What is GRUB responsible for?",
        options: ["Managing user accounts", "Booting the kernel", "Configuring network interfaces"],
        answer: "Booting the kernel"
      },
      {
        type: "text",
        question: "Where is the GRUB config file usually located?",
        answer: "/etc/default/grub"
      }
    ]
  },
  {
    cmd: "systemctl",
    category: "boot",
    def: "Control and query systemd services and units. Examples: `systemctl start nginx`, `systemctl stop nginx`, `systemctl enable nginx` (start at boot), `systemctl status nginx`.",
    shortDef: "Manage systemd services.",
    flashcard: true,
    questions: [
      {
        type: "mcq",
        question: "Which command enables a service to start at boot with systemctl?",
        options: [
          "systemctl start service",
          "systemctl enable service",
          "systemctl boot service"
        ],
        answer: "systemctl enable service"
      },
      {
        type: "text",
        question: "What systemctl command checks if sshd is running?",
        answer: "systemctl status sshd"
      }
    ]
  },
  {
    cmd: "cron",
    category: "boot",
    def: "Job scheduler for recurring tasks. Syntax: `* * * * * command` (minute, hour, day, month, weekday). User crontabs are managed with `crontab -e`. Daemon: `crond`.",
    shortDef: "Schedule recurring tasks.",
    flashcard: true,
    questions: [
      {
        type: "mcq",
        question: "Which command edits your personal crontab?",
        options: ["crontab -l", "crontab -e", "cron -edit"],
        answer: "crontab -e"
      },
      {
        type: "text",
        question: "What does `0 2 * * * backup.sh` do in cron?",
        answer: "Runs backup.sh daily at 2:00 AM"
      }
    ]
  },
  {
    cmd: "swapon",
    category: "boot",
    def: "Enable swap space (virtual memory). Example: `swapon /swapfile`.",
    shortDef: "Enable swap space.",
    flashcard: true,
    questions: [
      {
        type: "text",
        question: "What command activates a swap file named /swapfile?",
        answer: "swapon /swapfile"
      }
    ]
  },
  {
    cmd: "swapoff",
    category: "boot",
    def: "Disable swap space. Example: `swapoff /swapfile`.",
    shortDef: "Disable swap space.",
    flashcard: true,
    questions: [
      {
        type: "text",
        question: "What command disables all swap devices?",
        answer: "swapoff -a"
      }
    ]
  },
  /* ===========================
    SHELL & ENVIRONMENT
  ============================ */
  {
    cmd: "bash",
    category: "shell",
    def: "GNU Bourne Again Shell. Default shell on most Linux systems. Provides scripting, variables, loops, conditionals, and command history.",
    shortDef: "Default Linux shell.",
    flashcard: true,
    questions: [
      {
        type: "mcq",
        question: "What does 'bash' stand for?",
        options: ["Basic Shell", "Bourne Again Shell", "Binary Shell"],
        answer: "Bourne Again Shell"
      }
    ]
  },
  {
    cmd: "sh",
    category: "shell",
    def: "Original Bourne Shell. Lightweight and used for compatibility. Often symlinked to bash or dash in modern systems.",
    shortDef: "Original Unix shell.",
    flashcard: true,
    questions: [
      {
        type: "text",
        question: "Which shell is the predecessor of bash?",
        answer: "sh"
      }
    ]
  },
  {
    cmd: "echo",
    category: "shell",
    def: "Print text or variable values. Examples: `echo Hello`, `echo $PATH`.",
    shortDef: "Print text/variables.",
    flashcard: true,
    questions: [
      {
        type: "text",
        question: "What command prints the PATH environment variable?",
        answer: "echo $PATH"
      }
    ]
  },
  {
    cmd: "export",
    category: "shell",
    def: "Mark a variable to be passed to child processes. Example: `export VAR=value`.",
    shortDef: "Export environment variable.",
    flashcard: true,
    questions: [
      {
        type: "mcq",
        question: "Which command makes a variable available to child processes?",
        options: ["set", "export", "env"],
        answer: "export"
      }
    ]
  },
  {
    cmd: "unset",
    category: "shell",
    def: "Remove variables from the shell environment. Example: `unset VAR`.",
    shortDef: "Remove variable.",
    flashcard: true,
    questions: [
      {
        type: "text",
        question: "What command removes a variable named TEST from the environment?",
        answer: "unset TEST"
      }
    ]
  },
  {
    cmd: "PATH",
    category: "shell",
    def: "Environment variable containing directories to search for executables. Example: `echo $PATH` shows them.",
    shortDef: "Executable search path.",
    flashcard: true,
    questions: [
      {
        type: "mcq",
        question: "What is the purpose of PATH?",
        options: [
          "Stores system log paths",
          "Defines where the shell looks for commands",
          "Contains your home directory"
        ],
        answer: "Defines where the shell looks for commands"
      }
    ]
  },
  {
    cmd: "history",
    category: "shell",
    def: "Show or reuse previously run commands. Example: `history | grep ls`.",
    shortDef: "Command history.",
    flashcard: true,
    questions: [
      {
        type: "text",
        question: "What command searches your history for the string 'ssh'?",
        answer: "history | grep ssh"
      }
    ]
  },
  {
    cmd: ".bashrc",
    category: "shell",
    def: "User shell configuration file, loaded for interactive non-login shells. Good for aliases and custom functions.",
    shortDef: "User shell config (non-login).",
    flashcard: true,
    questions: [
      {
        type: "mcq",
        question: "Which file is sourced when you open a new terminal session (non-login)?",
        options: [".bashrc", ".profile", "/etc/shadow"],
        answer: ".bashrc"
      }
    ]
  },
  {
    cmd: ".profile",
    category: "shell",
    def: "User shell configuration file, loaded for login shells. Sets environment variables.",
    shortDef: "User login config.",
    flashcard: true,
    questions: [
      {
        type: "text",
        question: "Which user file sets environment variables for login shells?",
        answer: ".profile"
      }
    ]
  },
  {
    cmd: "/etc/profile",
    category: "shell",
    def: "System-wide environment configuration script for login shells. Affects all users.",
    shortDef: "System-wide login config.",
    flashcard: true,
    questions: []
  },
  {
    cmd: "/etc/bash.bashrc",
    category: "shell",
    def: "System-wide configuration loaded for interactive shells. Good place for admins to set aliases/functions globally.",
    shortDef: "System-wide interactive shell config.",
    flashcard: true,
    questions: []
  },
  {
    cmd: "nanorc",
    category: "shell",
    def: "Configuration file for the `nano` text editor. Located at `/etc/nanorc` or `~/.nanorc`. Defines syntax highlighting, key bindings, etc.",
    shortDef: "Nano editor config.",
    flashcard: true,
    questions: []
  },
  /* ===========================
    OTHER ESSENTIALS
  ============================ */
  {
    cmd: "ln",
    category: "other",
    def: "Create links between files. Hard link: `ln file1 file2`. Symbolic (soft) link: `ln -s target linkname`.",
    shortDef: "Create hard/symbolic links.",
    flashcard: true,
    questions: [
      {
        type: "mcq",
        question: "Which command creates a symbolic link to file.txt named link.txt?",
        options: [
          "ln file.txt link.txt",
          "ln -s file.txt link.txt",
          "ln -h file.txt link.txt"
        ],
        answer: "ln -s file.txt link.txt"
      }
    ]
  },
  {
    cmd: "nano",
    category: "other",
    def: "Simple terminal text editor. Example: `nano file.txt`. Configured via `~/.nanorc`.",
    shortDef: "Beginner-friendly editor.",
    flashcard: true,
    questions: [
      {
        type: "text",
        question: "What command opens a file named notes.txt in nano?",
        answer: "nano notes.txt"
      }
    ]
  },
  {
    cmd: "vi",
    category: "other",
    def: "Powerful modal text editor. Example: `vi file.txt`. Insert mode with `i`, save and quit with `:wq`.",
    shortDef: "Modal text editor.",
    flashcard: true,
    questions: [
      {
        type: "mcq",
        question: "In vi, which command saves and quits?",
        options: [":q!", ":wq", "Ctrl+C"],
        answer: ":wq"
      }
    ]
  },
  {
    cmd: "/etc/resolv.conf",
    category: "other",
    def: "Specifies DNS servers. Example: `nameserver 8.8.8.8`. Used by resolver libraries to translate domain names.",
    shortDef: "DNS configuration file.",
    flashcard: true,
    questions: []
  },
  {
    cmd: "/etc/sysctl.conf",
    category: "other",
    def: "Configures kernel parameters at runtime. Example: `net.ipv4.ip_forward=1`. Applied with `sysctl -p`.",
    shortDef: "Kernel parameters config.",
    flashcard: true,
    questions: [
      {
        type: "text",
        question: "Which command reloads settings from /etc/sysctl.conf?",
        answer: "sysctl -p"
      }
    ]
  },
  {
    cmd: "/etc/shadow",
    category: "other",
    def: "Stores user password hashes and account aging info. Only readable by root. Format: username, hash, last change, expiration.",
    shortDef: "Password hashes file.",
    flashcard: true,
    questions: [
      {
        type: "mcq",
        question: "Which file stores encrypted user password hashes?",
        options: ["/etc/passwd", "/etc/shadow", "/etc/hosts"],
        answer: "/etc/shadow"
      }
    ]
  },
  {
    cmd: "man",
    category: "other",
    def: "Displays manual pages for commands. Example: `man ls`.",
    shortDef: "Command manual pages.",
    flashcard: true,
    questions: [
      {
        type: "text",
        question: "What command displays the manual for ps?",
        answer: "man ps"
      }
    ]
  },
  {
    cmd: "info",
    category: "other",
    def: "GNU info system. Provides hyperlinked manuals. Example: `info coreutils`.",
    shortDef: "Hyperlinked documentation.",
    flashcard: true,
    questions: []
  },
  {
    cmd: "type",
    category: "other",
    def: "Show how a command name is interpreted (alias, built-in, or external binary). Example: `type ls`.",
    shortDef: "Check command type.",
    flashcard: true,
    questions: [
      {
        type: "mcq",
        question: "What does `type ls` output?",
        options: [
          "Shows if ls is an alias, builtin, or binary",
          "Lists all files named ls",
          "Checks permissions of ls"
        ],
        answer: "Shows if ls is an alias, builtin, or binary"
      }
    ]
  },
  {
    cmd: "which",
    category: "other",
    def: "Locate the path of a command binary in $PATH. Example: `which python3`.",
    shortDef: "Find command path.",
    flashcard: true,
    questions: [
      {
        type: "text",
        question: "Which command shows the location of the 'bash' binary?",
        answer: "which bash"
      }
    ]
  },
  {
    cmd: "exit",
    category: "other",
    def: "Exit the current shell session or script. Example: `exit 0` (success).",
    shortDef: "Exit shell/session.",
    flashcard: true,
    questions: []
  }
];
