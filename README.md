## Laravel project template with Vue and TailwindCSS

### Installation

#### Needed software

- [VirtualBox](https://www.virtualbox.org/)
- [Composer](https://getcomposer.org/)
- [NPM](https://www.npmjs.com/)

Create new repository using this one as a template, clone the newly created repo and run these commands inside the folder:

```
composer install
npm install
```

Add ip address and hostname to `/etc/hosts` file.

Change line 31 in [webpack.mix.js](webpack.mix.js#L31) file to your chosen hostname.

Create `.env` file by using `cp .env.example .env`.

Create `Homestead.yaml` file with your credentials (change the values in curly braces):

```yaml
ip: { ip address from /etc/hosts file }
memory: 2048
cpus: 2
provider: virtualbox
authorize: ~/.ssh/id_rsa.pub
keys:
  - ~/.ssh/id_rsa
folders:
  - map: { location of project }
    to: /home/vagrant/{project-name}
sites:
  - map: { hostname from /etc/hosts file }
    to: /home/vagrant/{project-name}/public
databases:
  - { database-name }
name: { project-name }
hostname: { project-name }
```

Create your Application Key by using `php artisan key:generate`.

Run `vagrant up` to bring up virtual machine.

Run `npm run watch` and start coding!
