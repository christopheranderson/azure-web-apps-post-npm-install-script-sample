# Post NPM install custom deployment example

This example will install jquery and move it to ./public after npm install, when deployed to Azure Web Apps via CD/CI

## How it works

To learn the ins and outs of custom deployment, read all about it on the 
[Kudu GitHub Wiki](https://github.com/projectkudu/kudu/wiki/Custom-Deployment-Script).

In this sample, we include two files - `.deployment` and `deploy.cmd`. `.deployment` tells Kudu
to run our `deploy.cmd` command. Our `deploy.cmd` file will run `npm install` for us and then we can
move files around which we installed in the npm step.

In this sample, we have jquery being installed and we're going to move the `jquery.min.js` file into our `.\public` folder.

The code in the deploy.cmd that does that looks like this:

```
:: 4. Move packages around
IF EXIST "%DEPLOYMENT_TARGET%\node_modules" (
    pushd "%DEPLOYMENT_TARGET%"
    mv ".\node_modules\jquery\dist\jquery.min.js" ".\public\jquery.min.js"
)
```

Just remove the mv statement for jquery and replace with your own custom logic if you'd like to do post npm install actions.

## Try it now

If you have an Azure subscription, you can click this button:

[![Deploy to Azure](http://azuredeploy.net/deploybutton.png)](https://azuredeploy.net/)

## LICENSE

[LICENSE](LICENSE)