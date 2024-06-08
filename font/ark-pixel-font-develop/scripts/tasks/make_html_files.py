from scripts import configs
from scripts.services import template_service
from scripts.services.font_service import DesignContext


def main():
    for font_config in configs.font_configs.values():
        design_context = DesignContext.load(font_config)
        for width_mode in configs.width_modes:
            template_service.make_alphabet_html_file(design_context, width_mode)
        template_service.make_demo_html_file(design_context)
    template_service.make_index_html_file()
    template_service.make_playground_html_file()


if __name__ == '__main__':
    main()
