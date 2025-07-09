# Clash节点处理

> 本文作者：[阳九五](https://github.com/CN-YoungYang)
>
> 本站地址：[https://blog.56321654.xyz](https://blog.56321654.xyz)

## Clash Verge全局扩展脚本
```javascript
// 国内DNS服务器
const domesticNameservers = [
  "https://dns.alidns.com/dns-query", // 阿里云公共DNS
  "https://doh.pub/dns-query", // 腾讯DNSPod
  "https://doh.360.cn/dns-query" // 360安全DNS
];
// 国外DNS服务器
const foreignNameservers = [
  "https://1.1.1.1/dns-query", // Cloudflare(主)
  "https://1.0.0.1/dns-query", // Cloudflare(备)
  "https://208.67.222.222/dns-query", // OpenDNS(主)
  "https://208.67.220.220/dns-query", // OpenDNS(备)
  "https://194.242.2.2/dns-query", // Mullvad(主)
  "https://194.242.2.3/dns-query" // Mullvad(备)
];
// DNS配置
const dnsConfig = {
  "enable": true,
  "listen": "0.0.0.0:1053",
  "ipv6": true,
  "use-system-hosts": false,
  "cache-algorithm": "arc",
  "enhanced-mode": "fake-ip",
  "fake-ip-range": "198.18.0.1/16",
  "fake-ip-filter": [
    // 本地主机/设备
    "+.lan",
    "+.local",
    // Windows网络出现小地球图标
    "+.msftconnecttest.com",
    "+.msftncsi.com",
    // QQ快速登录检测失败
    "localhost.ptlogin2.qq.com",
    "localhost.sec.qq.com",
    // 微信快速登录检测失败
    "localhost.work.weixin.qq.com"
  ],
  "default-nameserver": ["223.5.5.5", "119.29.29.29", "1.1.1.1", "8.8.8.8"],
  "nameserver": [...domesticNameservers, ...foreignNameservers],
  "proxy-server-nameserver": [...domesticNameservers, ...foreignNameservers],
  "nameserver-policy": {
    "geosite:private,cn,geolocation-cn": domesticNameservers,
    "geosite:google,youtube,telegram,gfw,geolocation-!cn": foreignNameservers
  }
};
// 规则集通用配置
const ruleProviderCommon = {
  "type": "http",
  "format": "yaml",
  "interval": 86400
};
// 规则集配置
const ruleProviders = {
  "reject": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/reject.txt",
    "path": "./ruleset/loyalsoldier/reject.yaml"
  },
  "icloud": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/icloud.txt",
    "path": "./ruleset/loyalsoldier/icloud.yaml"
  },
  "apple": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/apple.txt",
    "path": "./ruleset/loyalsoldier/apple.yaml"
  },
  "google": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/google.txt",
    "path": "./ruleset/loyalsoldier/google.yaml"
  },
  "proxy": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/proxy.txt",
    "path": "./ruleset/loyalsoldier/proxy.yaml"
  },
  "direct": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/direct.txt",
    "path": "./ruleset/loyalsoldier/direct.yaml"
  },
  "private": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/private.txt",
    "path": "./ruleset/loyalsoldier/private.yaml"
  },
  "gfw": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/gfw.txt",
    "path": "./ruleset/loyalsoldier/gfw.yaml"
  },
  "tld-not-cn": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/tld-not-cn.txt",
    "path": "./ruleset/loyalsoldier/tld-not-cn.yaml"
  },
  "telegramcidr": {
    ...ruleProviderCommon,
    "behavior": "ipcidr",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/telegramcidr.txt",
    "path": "./ruleset/loyalsoldier/telegramcidr.yaml"
  },
  "cncidr": {
    ...ruleProviderCommon,
    "behavior": "ipcidr",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/cncidr.txt",
    "path": "./ruleset/loyalsoldier/cncidr.yaml"
  },
  "lancidr": {
    ...ruleProviderCommon,
    "behavior": "ipcidr",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/lancidr.txt",
    "path": "./ruleset/loyalsoldier/lancidr.yaml"
  },
  "applications": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/applications.txt",
    "path": "./ruleset/loyalsoldier/applications.yaml"
  },
  "openai": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/OpenAI/OpenAI.yaml",
    "path": "./ruleset/blackmatrix7/openai.yaml"
  }
};
// 规则
const rules = [
  // 自定义规则
  "DOMAIN-KEYWORD,bing.com,DIRECT", // bing
  "DOMAIN-KEYWORD,bing.net,DIRECT", // bing
  "DOMAIN-SUFFIX,googleapis.com,PROXY", // Google服务
  "DOMAIN-SUFFIX,googleapis.cn,PROXY", // Google服务
  "DOMAIN-SUFFIX,gstatic.com,PROXY", // Google静态资源
  "DOMAIN-SUFFIX,xn--ngstr-lra8j.com,PROXY", // Google Play下载服务
  "DOMAIN-SUFFIX,github.io,PROXY", // Github Pages
  "DOMAIN,v2rayse.com,PROXY", // V2rayse节点工具
  // blackmatrix7 规则集
  "RULE-SET,openai,PROXY",
  // Loyalsoldier 规则集
  "RULE-SET,applications,DIRECT",
  "RULE-SET,private,DIRECT",
  "RULE-SET,reject,广告拦截",
  "RULE-SET,icloud,DIRECT",
  "RULE-SET,apple,DIRECT",
  "RULE-SET,google,DIRECT",
  "RULE-SET,proxy,代理模式",
  "RULE-SET,gfw,PROXY",
  "RULE-SET,tld-not-cn,PROXY",
  "RULE-SET,direct,DIRECT",
  "RULE-SET,lancidr,DIRECT,no-resolve",
  "RULE-SET,cncidr,DIRECT,no-resolve",
  "RULE-SET,telegramcidr,PROXY,no-resolve",
  // 其他规则
  "GEOIP,LAN,DIRECT,no-resolve",
  "GEOIP,CN,DIRECT,no-resolve",
  "MATCH,代理模式"
];
// 代理组通用配置
const groupBaseOption = {
  "interval": 300,
  "timeout": 3000,
  "url": "https://www.google.com/generate_204",
  "lazy": true,
  "max-failed-times": 3,
  "hidden": false
};

// 程序入口
function main(config, profileName) {
  const proxyCount = config?.proxies?.length ?? 0;
  const proxyProviderCount =
    typeof config?.["proxy-providers"] === "object" ? Object.keys(config["proxy-providers"]).length : 0;
  if (proxyCount === 0 && proxyProviderCount === 0) {
    throw new Error("配置文件中未找到任何代理");
  }

  // 覆盖原配置中DNS配置
  config["dns"] = dnsConfig;

  // 覆盖原配置中的代理组
  config["proxy-groups"] = [
    {
      ...groupBaseOption,
      "name": "代理模式",
      "type": "select",
      "proxies": ["绕过大陆丨黑名单(GFWlist)", "绕过大陆丨白名单(Whitelist)"],
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/adjust.svg"
    },
    {
      ...groupBaseOption,
      "name": "节点选择",
      "type": "select",
      "proxies": [],
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/speed.svg"
    },
    {
      ...groupBaseOption,
      "name": "广告拦截",
      "type": "select",
      "proxies": ["REJECT", "DIRECT","PROXY"],
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/block.svg"
    },
    {
      ...groupBaseOption,
      "name": "绕过大陆丨黑名单(GFWlist)",
      "type": "url-test",
      "proxies": ["DIRECT"],
      "hidden": true,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/unknown.svg"
    },
    {
      ...groupBaseOption,
      "name": "绕过大陆丨白名单(Whitelist)",
      "type": "url-test",
      "proxies": ["PROXY"],
      "hidden": true,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/unknown.svg"
    },
    {
      ...groupBaseOption,
      "name": "PROXY",
      "type": "url-test",
      "proxies": ["节点选择"],
      "hidden": true,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/unknown.svg"
    }
  ];

  // 覆盖原配置中的规则
  config["rule-providers"] = ruleProviders;
  config["rules"] = rules;

  // 返回修改后的配置
  return config;
}
```

## Clash Verge全局扩展脚本 - 内置落地节点
```javascript
// 国内DNS服务器
const domesticNameservers = [
  "https://dns.alidns.com/dns-query", // 阿里云公共DNS
  "https://doh.pub/dns-query", // 腾讯DNSPod
  "https://doh.360.cn/dns-query" // 360安全DNS
];
// 国外DNS服务器
const foreignNameservers = [
  "https://1.1.1.1/dns-query", // Cloudflare(主)
  "https://1.0.0.1/dns-query", // Cloudflare(备)
  "https://208.67.222.222/dns-query", // OpenDNS(主)
  "https://208.67.220.220/dns-query", // OpenDNS(备)
  "https://194.242.2.2/dns-query", // Mullvad(主)
  "https://194.242.2.3/dns-query" // Mullvad(备)
];
// DNS配置
const dnsConfig = {
  "enable": true,
  "listen": "0.0.0.0:1053",
  "ipv6": true,
  "use-system-hosts": false,
  "cache-algorithm": "arc",
  "enhanced-mode": "fake-ip",
  "fake-ip-range": "198.18.0.1/16",
  "fake-ip-filter": [
    // 本地主机/设备
    "+.lan",
    "+.local",
    // Windows网络出现小地球图标
    "+.msftconnecttest.com",
    "+.msftncsi.com",
    // QQ快速登录检测失败
    "localhost.ptlogin2.qq.com",
    "localhost.sec.qq.com",
    // 微信快速登录检测失败
    "localhost.work.weixin.qq.com"
  ],
  "default-nameserver": ["223.5.5.5", "119.29.29.29", "1.1.1.1", "8.8.8.8"],
  "nameserver": [...domesticNameservers, ...foreignNameservers],
  "proxy-server-nameserver": [...domesticNameservers, ...foreignNameservers],
  "nameserver-policy": {
    "geosite:private,cn,geolocation-cn": domesticNameservers,
    "geosite:google,youtube,telegram,gfw,geolocation-!cn": foreignNameservers
  }
};
// 规则集通用配置
const ruleProviderCommon = {
  "type": "http",
  "format": "yaml",
  "interval": 86400
};
// 规则集配置
const ruleProviders = {
  "reject": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/reject.txt",
    "path": "./ruleset/loyalsoldier/reject.yaml"
  },
  "icloud": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/icloud.txt",
    "path": "./ruleset/loyalsoldier/icloud.yaml"
  },
  "apple": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/apple.txt",
    "path": "./ruleset/loyalsoldier/apple.yaml"
  },
  "google": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/google.txt",
    "path": "./ruleset/loyalsoldier/google.yaml"
  },
  "proxy": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/proxy.txt",
    "path": "./ruleset/loyalsoldier/proxy.yaml"
  },
  "direct": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/direct.txt",
    "path": "./ruleset/loyalsoldier/direct.yaml"
  },
  "private": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/private.txt",
    "path": "./ruleset/loyalsoldier/private.yaml"
  },
  "gfw": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/gfw.txt",
    "path": "./ruleset/loyalsoldier/gfw.yaml"
  },
  "tld-not-cn": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/tld-not-cn.txt",
    "path": "./ruleset/loyalsoldier/tld-not-cn.yaml"
  },
  "telegramcidr": {
    ...ruleProviderCommon,
    "behavior": "ipcidr",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/telegramcidr.txt",
    "path": "./ruleset/loyalsoldier/telegramcidr.yaml"
  },
  "cncidr": {
    ...ruleProviderCommon,
    "behavior": "ipcidr",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/cncidr.txt",
    "path": "./ruleset/loyalsoldier/cncidr.yaml"
  },
  "lancidr": {
    ...ruleProviderCommon,
    "behavior": "ipcidr",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/lancidr.txt",
    "path": "./ruleset/loyalsoldier/lancidr.yaml"
  },
  "applications": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/applications.txt",
    "path": "./ruleset/loyalsoldier/applications.yaml"
  },
  "openai": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/OpenAI/OpenAI.yaml",
    "path": "./ruleset/blackmatrix7/openai.yaml"
  }
};
// 规则
const rules = [
  // 自定义规则
  "DOMAIN-KEYWORD,bing.com,DIRECT", // bing
  "DOMAIN-KEYWORD,bing.net,DIRECT", // bing
  "DOMAIN-SUFFIX,googleapis.com,PROXY", // Google服务
  "DOMAIN-SUFFIX,googleapis.cn,PROXY", // Google服务
  "DOMAIN-SUFFIX,gstatic.com,PROXY", // Google静态资源
  "DOMAIN-SUFFIX,xn--ngstr-lra8j.com,PROXY", // Google Play下载服务
  "DOMAIN-SUFFIX,github.io,PROXY", // Github Pages
  "DOMAIN,v2rayse.com,PROXY", // V2rayse节点工具
  // blackmatrix7 规则集
  "RULE-SET,openai,PROXY",
  // Loyalsoldier 规则集
  "RULE-SET,applications,DIRECT",
  "RULE-SET,private,DIRECT",
  "RULE-SET,reject,广告拦截",
  "RULE-SET,icloud,DIRECT",
  "RULE-SET,apple,DIRECT",
  "RULE-SET,google,DIRECT",
  "RULE-SET,proxy,代理模式",
  "RULE-SET,gfw,PROXY",
  "RULE-SET,tld-not-cn,PROXY",
  "RULE-SET,direct,DIRECT",
  "RULE-SET,lancidr,DIRECT,no-resolve",
  "RULE-SET,cncidr,DIRECT,no-resolve",
  "RULE-SET,telegramcidr,PROXY,no-resolve",
  // 其他规则
  "GEOIP,LAN,DIRECT,no-resolve",
  "GEOIP,CN,DIRECT,no-resolve",
  "MATCH,代理模式"
];
// 代理组通用配置
const groupBaseOption = {
  "interval": 300,
  "timeout": 3000,
  "url": "https://www.google.com/generate_204",
  "lazy": true,
  "max-failed-times": 3,
  "hidden": false
};

// 写死的落地节点配置
const staticLandingProxies = [
  // SOCKS5 落地节点
  {
    "name": "Socks5 纽约",
    "type": "socks5",
    "server": "proxy.swiftproxy.net",
    "port": 5001,
    "username": "username",
    "password": "password",
    "udp": false
  }
];

// 程序入口
function main(config, profileName) {
  const proxyCount = config?.proxies?.length ?? 0;
  const proxyProviderCount =
    typeof config?.["proxy-providers"] === "object" ? Object.keys(config["proxy-providers"]).length : 0;
  if (proxyCount === 0 && proxyProviderCount === 0) {
    throw new Error("配置文件中未找到任何代理");
  }

  // 机场的节点
  const urlProxies = (config.proxies || []);
  const urlProxiesName = urlProxies.map(item => item.name);

  // 添加写死的节点到配置
  config.proxies = [...urlProxies, ...staticLandingProxies];
  const relayProxies = staticLandingProxies.map(item => {
    return {
      ...groupBaseOption,
      "name": "Relay - " + item.name,
      "type": "relay",
      "proxies": ["节点选择", item.name],
      "hidden": true,
    }
  });
  const relayProxiesName = relayProxies.map(item => item.name);

  // 覆盖原配置中DNS配置
  config["dns"] = dnsConfig;

  // 覆盖原配置中的代理组
  config["proxy-groups"] = [
    {
      ...groupBaseOption,
      "name": "落地模式",
      "type": "select",
      "proxies": ["禁止落地"].concat(relayProxiesName),
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/adjust.svg"
    },
    {
      ...groupBaseOption,
      "name": "禁止落地",
      "type": "url-test",
      "proxies": ["节点选择"],
      "hidden": true,
    },
    ...relayProxies,
    {
      ...groupBaseOption,
      "name": "代理模式",
      "type": "select",
      "proxies": ["绕过大陆丨黑名单(GFWlist)", "绕过大陆丨白名单(Whitelist)"],
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/adjust.svg"
    },
    {
      ...groupBaseOption,
      "name": "节点选择",
      "type": "select",
      "proxies": urlProxiesName,
      // "proxies": [],
      // "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/speed.svg"
    },
    {
      ...groupBaseOption,
      "name": "广告拦截",
      "type": "select",
      "proxies": ["REJECT", "DIRECT", "PROXY"],
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/block.svg"
    },
    {
      ...groupBaseOption,
      "name": "绕过大陆丨黑名单(GFWlist)",
      "type": "url-test",
      "proxies": ["DIRECT"],
      "hidden": true,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/unknown.svg"
    },
    {
      ...groupBaseOption,
      "name": "绕过大陆丨白名单(Whitelist)",
      "type": "url-test",
      "proxies": ["PROXY"],
      "hidden": true,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/unknown.svg"
    },
    {
      ...groupBaseOption,
      "name": "PROXY",
      "type": "url-test",
      "proxies": ["落地模式"],
      "hidden": true,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/unknown.svg"
    }
  ];

  // 覆盖原配置中的规则
  config["rule-providers"] = ruleProviders;
  config["rules"] = rules;

  // 返回修改后的配置
  return config;
}
```

## Clash for Windows 预处理规则
```yaml
parsers: # array
  # - reg: ^.*$ 匹配所有订阅，或  - url: https://example.com/profile.yaml 指定订阅
  - reg: ^.*$
  # 删除服务商提供的策略组和规则
    code: |
      module.exports.parse = (raw, { yaml }) => {
        const rawObj = yaml.parse(raw)
        const groups = []
        const rules = []
        return yaml.stringify({ ...rawObj, 'proxy-groups': groups, rules })
      } 
  # 建立自己的配置
    yaml:
      prepend-proxy-groups: # 建立策略组
        - name: 🔯 代理模式 
          type: select
          proxies:
            - 绕过大陆丨黑名单(GFWlist) # 黑名单模式，意为「只有命中规则的网络流量，才使用代理」
            - 绕过大陆丨白名单(Whitelist) # 白名单模式，意为「没有命中规则的网络流量，统统使用代理」
            
        - name: 🔰 选择节点 
          type: select
            
        - name: 🛑 广告拦截
          type: select
          proxies:
            - DIRECT
            - REJECT
            - PROXY
            
        - name: 绕过大陆丨黑名单(GFWlist)
          type: url-test
          url: http://www.gstatic.com/generate_204
          interval: 86400
          proxies:
            - DIRECT
            
        - name: 绕过大陆丨白名单(Whitelist)
          type: url-test
          url: http://www.gstatic.com/generate_204
          interval: 86400
          proxies:
            - PROXY
            
        - name: PROXY
          type: url-test
          url: http://www.gstatic.com/generate_204
          interval: 86400
          proxies:
            - 🔰 选择节点
            
  # 策略组示例
       # - name: 分组名
         # type: select       # 手动选点   
               # url-test     # 自动选择延迟最低的节点
               # fallback     # 节点故障时自动切换下一个
               # laod-balance # 均衡使用分组内的节点
         # url: http://www.gstatic.com/generate_204 # 测试地址 非select类型分组必要
         # interval: 300 # 自动测试间隔时间，单位秒 非select类型分组必要
         # tolerance: 50 # 允许的偏差，节点之间延迟差小于该值不切换 非必要
         # proxies:  
           # - 节点名称或其他分组套娃
          
      commands:
        - proxy-groups.🔰 选择节点.proxies=[]proxyNames # 向指定策略组添加订阅中的节点名，可使用正则过滤
        - proxy-groups.🔰 选择节点.proxies.0+DIRECT # 向指定分组第一个位置添加一个 DIRECT 节点名
        
        # 一些可能用到的正则过滤节点示例，使分组更细致
        # []proxyNames|a                         # 包含a
        # []proxyNames|^(.*)(a|b)+(.*)$          # 包含a或b
        # []proxyNames|^(?=.*a)(?=.*b).*$        # 包含a和b
        # []proxyNames|^((?!b).)*a((?!b).)*$     # 包含a且不包含b
        # []proxyNames|^((?!b|c).)*a((?!b|c).)*$ # 包含a且不包含b或c
        
  # 添加规则
      prepend-rules: # 规则由上往下遍历，如上面规则已经命中，则不再往下处理
        - RULE-SET,applications,DIRECT
        - DOMAIN,clash.razord.top,DIRECT
        - DOMAIN,yacd.haishan.me,DIRECT
        - RULE-SET,private,DIRECT
        - RULE-SET,reject,🛑 广告拦截
        - RULE-SET,icloud,DIRECT #
        - RULE-SET,apple,DIRECT # 这三个为国内可直连地址，如果希望走代理改为PROXY
        - RULE-SET,google,DIRECT # 
        - RULE-SET,tld-not-cn,PROXY
        - RULE-SET,gfw,PROXY
        - RULE-SET,greatfire,PROXY
        - RULE-SET,telegramcidr,PROXY
        - RULE-SET,lancidr,DIRECT
        - RULE-SET,cncidr,DIRECT
        - GEOIP,,DIRECT
        - GEOIP,CN,DIRECT
        - RULE-SET,direct,DIRECT
        - RULE-SET,proxy,🔯 代理模式
        - MATCH,🔯 代理模式 # 规则之外的
  # 添加规则集
      mix-rule-providers: 
        reject: # 广告域名列表
          type: http
          behavior: domain
          url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/reject.txt"
          path: ./ruleset/reject.yaml
          interval: 86400
          
        icloud: # iCloud 域名列表
          type: http
          behavior: domain
          url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/icloud.txt"
          path: ./ruleset/icloud.yaml
          interval: 86400
          
        apple: # Apple 在中国大陆可直连的域名列表
          type: http
          behavior: domain
          url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/apple.txt"
          path: ./ruleset/apple.yaml
          interval: 86400
          
        google: # Google 在中国大陆可直连的域名列表
          type: http
          behavior: domain
          url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/google.txt"
          path: ./ruleset/google.yaml
          interval: 86400
          
        proxy: # 代理域名列表
          type: http
          behavior: domain
          url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/proxy.txt"
          path: ./ruleset/proxy.yaml
          interval: 86400
          
        direct: # 直连域名列表
          type: http
          behavior: domain
          url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/direct.txt"
          path: ./ruleset/direct.yaml
          interval: 86400
          
        private: # 私有网络专用域名列表
          type: http
          behavior: domain
          url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/private.txt"
          path: ./ruleset/private.yaml
          interval: 86400
          
        gfw: # GFWList 域名列表
          type: http
          behavior: domain
          url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/gfw.txt"
          path: ./ruleset/gfw.yaml
          interval: 86400
          
        greatfire: # GreatFire 域名列表
          type: http
          behavior: domain
          url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/greatfire.txt"
          path: ./ruleset/greatfire.yaml
          interval: 86400
          
        tld-not-cn: # 非中国大陆使用的顶级域名列表
          type: http
          behavior: domain
          url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/tld-not-cn.txt"
          path: ./ruleset/tld-not-cn.yaml
          interval: 86400
          
        telegramcidr: # Telegram 使用的 IP 地址列表
          type: http
          behavior: ipcidr
          url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/telegramcidr.txt"
          path: ./ruleset/telegramcidr.yaml
          interval: 86400
          
        cncidr: # 中国大陆 IP 地址列表
          type: http
          behavior: ipcidr
          url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/cncidr.txt"
          path: ./ruleset/cncidr.yaml
          interval: 86400
          
        lancidr: # 局域网 IP 及保留 IP 地址列表
          type: http
          behavior: ipcidr
          url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/lancidr.txt"
          path: ./ruleset/lancidr.yaml
          interval: 86400
          
        applications: # 需要直连的常见软件列表
          type: http
          behavior: classical
          url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/applications.txt"
          path: ./ruleset/applications.yaml
          interval: 86400
```
