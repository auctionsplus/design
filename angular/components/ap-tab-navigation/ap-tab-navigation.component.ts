import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

export interface TabItem {
  label: string;
  value?: string;  // optional string key; falls back to index if omitted
}

/**
 * ap-tab-navigation
 *
 * Horizontal tab bar with an active bottom-border indicator.
 * Figma: Tabbed Navigation pattern
 *
 * @Input  tabs         Array of tab labels or TabItem objects
 * @Input  activeIndex  Index of the currently active tab  (default: 0)
 * @Output tabChange    Emits the index of the clicked tab
 *
 * Usage:
 *   <ap-tab-navigation
 *     [tabs]="['Upcoming Auctions', 'Forward+', 'Sale Results']"
 *     [activeIndex]="selectedTab"
 *     (tabChange)="selectedTab = $event"
 *   />
 *
 *   <!-- With TabItem objects -->
 *   <ap-tab-navigation
 *     [tabs]="[{ label: 'Overview', value: 'overview' }, { label: 'Details', value: 'details' }]"
 *     [activeIndex]="selectedTab"
 *     (tabChange)="selectedTab = $event"
 *   />
 */
@Component({
  selector: 'ap-tab-navigation',
  standalone: true,
  imports: [],
  templateUrl: './ap-tab-navigation.component.html',
  styleUrl: './ap-tab-navigation.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApTabNavigationComponent {
  @Input() tabs: (string | TabItem)[] = [];
  @Input() activeIndex = 0;
  @Output() tabChange = new EventEmitter<number>();

  labelOf(tab: string | TabItem): string {
    return typeof tab === 'string' ? tab : tab.label;
  }

  select(index: number): void {
    if (index !== this.activeIndex) {
      this.tabChange.emit(index);
    }
  }
}
