import { AfterContentInit, Directive, ElementRef, HostListener, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { extractElementPosition } from 'ng-html-util';
import { UtilsService } from 'src/utils/utils.service';
import * as $ from 'jquery';

@Directive({
    selector: '[scroll-spy]'
})
export class ScrollSpyDirective implements AfterContentInit {

    private elements = [];
    private elementsTopDistances = [];
    private currentActiveLink;
    private directNavigation = false;

    // TODO: Change the any type to Document when fix https://github.com/angular/angular/issues/15640
    constructor(@Inject(DOCUMENT) private document: any,
        private el: ElementRef,
        private renderer: Renderer2,
        private _UtilsService: UtilsService) {
    }

    public ngAfterContentInit(): void {
        this.collectIds();
    }

    private collectIds() {
        this.elements = [];
        let elements = this.el.nativeElement.querySelectorAll('a');

        for (let i = 0; i < elements.length; i++) {
            let elem = elements.item(i);

            let id = ScrollSpyDirective.getId(elem);
            if (!id)
                continue;

            let destination = this._getPeerElement(id);

            if (!destination)
                continue;

            elem.addEventListener('click', this._onLinkClicked.bind(this));

            this.elements.push({
                id,
                link: elem,
                destination
            })
        }
    }

    private _onLinkClicked(event: Event) {
        event.preventDefault();

        let target = event.currentTarget;
        let id = ScrollSpyDirective.getId(target);
        let destination = this._getPeerElement(id);
        this.directNavigation = true;

        let position = extractElementPosition(this.document, destination);

        window.scrollTo({ top: position.top - 25, left: 0, behavior: 'smooth' });

        this._cleanCurrentLink();
        this._setCurrentLink(target);
        this.directNavigation = false;
    }

    private _getPeerElement(id) {

        let destination = this.document.getElementById(id);

        if (!destination)
            return null;

        return destination;
    }

    private static getId(elem) {
        let href = elem.getAttribute('href');

        if (!href)
            return null;
        return href.replace('#', '');
    }

    @HostListener('window:scroll', ['$event'])
    onWindowScroll(event: Event) {
        if (this.directNavigation) { return; }
        let encuentra = false;
        const topLimit = document.getElementById('header').offsetHeight + 12;
        for (const [index, elem] of this.elements.entries()) {
            const topSection = elem.destination.getBoundingClientRect().top;
            const nextSection = this.elements[index + 1];
            const topNextSection = !this._UtilsService.isNullOrUndefinedOrBlank(nextSection) ?
                nextSection.destination.getBoundingClientRect().top : 0;
            if (topSection > 0 && topSection <= topLimit) {
                if (topNextSection > 0 && topNextSection > topLimit) {
                    this._cleanCurrentLink();
                    this._setCurrentLink(elem.link);
                    encuentra = true;
                } else {
                    this._cleanCurrentLink();
                    this._setCurrentLink(nextSection.link);
                    encuentra = true;
                }
                break;
            }
        }
        if (!encuentra) {
            for (const [index, elem] of this.elements.entries()) {
                const topSection = elem.destination.getBoundingClientRect().top;
                const previousSection = this.elements[index - 1];
                if (topSection > 0 && topSection > topLimit && !this._UtilsService.isNullOrUndefinedOrBlank(previousSection)) {
                    this._cleanCurrentLink();
                    this._setCurrentLink(previousSection.link);
                    break;
                }
            }

        }
        //
        this.sidebarScrolling($('#sidebar'));


    }

    private sidebarScrolling(htmlElement): void {
        const offset = htmlElement.offset();
        const headerWidth = document.getElementById('header').offsetHeight;
        const topPadding = headerWidth - 100;
        if ($(window).scrollTop() <= headerWidth) {
            if ($(window).scrollTop() === 0) {
                htmlElement.stop().animate({
                    marginTop: $(window).scrollTop()
                });
            } else {
                htmlElement.stop().animate({
                    marginTop: $(window).scrollTop() - offset.top + topPadding
                });
            }
        } else {
            htmlElement.stop().animate({
                marginTop: topPadding - headerWidth
            });
        }
    }

    private _cleanCurrentLink() {
        if (!this.currentActiveLink) { return; }
        this.renderer.removeClass(this.currentActiveLink, 'active');
    }

    private _setCurrentLink(elem) {
        this.currentActiveLink = elem;
        this.renderer.addClass(this.currentActiveLink, 'active');
    }
}
