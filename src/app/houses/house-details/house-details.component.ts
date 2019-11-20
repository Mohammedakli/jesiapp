import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HousesService } from '../houses.service';
import { CharactersResourceService } from 'src/app/characters/data-access';
import { House } from '../House';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.scss'],
})
export class HouseDetailsComponent implements OnInit {
  public house$!: Observable<House>;
  public constructor(private readonly activatedRoute: ActivatedRoute, private readonly housesService: HousesService,private readonly resource: CharactersResourceService,private readonly router: Router) {}

  public ngOnInit(): void {
    const {id} = this.activatedRoute.snapshot.params;
    this.getHouse(id)


  }

  private getHouse(id) {
    this.house$ = this.housesService.getHouse(id)
  }

  private CharacterResource(){


  }

  private returnToBack(){
    this.router.navigateByUrl('/houses');
  }




}
