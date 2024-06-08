from scripts.configs.font import FontConfig
from scripts.configs.deploy import GitDeployConfig

width_modes = [
    'monospaced',
    'proportional',
]

language_flavors = [
    'latin',
    'zh_cn',
    'zh_hk',
    'zh_tw',
    'zh_tr',
    'ja',
    'ko',
]

locale_to_language_flavor = {
    'en': 'latin',
    'zh-cn': 'zh_cn',
    'zh-hk': 'zh_hk',
    'zh-tw': 'zh_tw',
    'zh-tr': 'zh_tr',
    'ja': 'ja',
    'ko': 'ko',
}

font_sizes = [10, 12, 16]

font_configs = FontConfig.load_all()

font_formats = ['otf', 'woff2', 'ttf', 'bdf']

font_collection_formats = ['otc', 'ttc']

git_deploy_config = GitDeployConfig(
    url='git@github.com:TakWolf/ark-pixel-font.git',
    remote_name='github',
    branch_name='gh-pages',
)
