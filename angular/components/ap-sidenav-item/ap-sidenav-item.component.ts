import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';

export type SidenavIconVariant = 'outlined' | 'outlined-new' | 'solid';

/**
 * ap-sidenav-item
 *
 * A single item in the dashboard sidebar navigation.
 * Renders as an <a routerLink> when `href` is supplied,
 * or a <button> for expandable/action items.
 *
 * @Input title         Display label
 * @Input icon          Material Symbols Rounded name (e.g. 'list_alt', 'person')
 * @Input iconVariant   'outlined' | 'outlined-new' | 'solid'  (default: 'outlined')
 * @Input href          Router path — renders as <a> with routerLinkActive when set
 * @Input expandable    Show expand_more chevron; renders as <button>
 * @Input expanded      Controls chevron rotation (true = rotated 180°)
 * @Output itemClick    Emitted when a button-type item is clicked
 * @Output expandedChange  Two-way binding for expanded state
 *
 * Usage:
 *   <!-- Link item -->
 *   <ap-sidenav-item title="My Sales" icon="list_alt" href="/my-sales" />
 *
 *   <!-- Expandable button item -->
 *   <ap-sidenav-item
 *     title="My Account"
 *     icon="person"
 *     [expandable]="true"
 *     [(expanded)]="accountOpen"
 *   />
 *
 *   <!-- Newer icon set -->
 *   <ap-sidenav-item title="Forward+ Admin" icon="keep" iconVariant="outlined-new" href="/forward-plus/admin" />
 */
@Component({
  selector: 'ap-sidenav-item',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass],
  templateUrl: './ap-sidenav-item.component.html',
  styleUrl: './ap-sidenav-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApSidenavItemComponent {
  @Input({ required: true }) title!: string;
  @Input() icon?: string;
  @Input() iconVariant: SidenavIconVariant = 'outlined';
  @Input() href?: string;
  @Input() expandable = false;
  @Input() expanded = false;
  @Output() itemClick = new EventEmitter<void>();
  @Output() expandedChange = new EventEmitter<boolean>();

  get iconClass(): string {
    return `icon-${this.iconVariant}`;
  }

  toggle(): void {
    this.expanded = !this.expanded;
    this.expandedChange.emit(this.expanded);
    this.itemClick.emit();
  }
}
